const express = require('express')
const db = require('../dbConnection')

module.exports = {
    postBlog: async ( req, res ) => {
        console.log(req.body)
        const {  blogImage, title, body1, title2, body2, agent_id } = req.body

        if( !blogImage || !title || !body1 || !agent_id ){
            return res.status(404).json({ message:  'All field are mandatory'})
        }

        try{
            await db.query(
                'INSERT INTO blog ( image, title, body1, title2, body2, agent_id ) VALUE ( ?, ?, ?, ?, ?, ? )',
                [ blogImage, title, body1, title2, body2, agent_id ]
            )

            return res.status(201).json({ message:  'Blog posted successfully'})

        }catch(err){
            return res.status(500).json({ message:  err.message})
        }
    },

    getBlog: async ( req, res ) => {
        try{
            const blog = await db.query('SELECT * FROM blog');

            return res.status(200).json(blog)
        }catch(err){
            return res.status(501).json({ message:  err.message })
        }
    },

    deleteBlog: async ( req, res ) => {
        const { agent_id, blog_id } = req.body

        if( !agent_id || !blog_id ){
            return res.status(404).json({ message:  'All field are mandatory'})
        }

        try{
            const blogDetail = await db.query(
                'SELECT * FROM blog where blog_id = ?',
                [ blog_id ]
            )
            
            if(agent_id != blogDetail[0][0].agent_id){
                return res.status(404).json({ message:  'Not authorized'})
            }
            
            await db.query(
                'DELETE FROM blog WHERE blog_id = ? ',
                [ blog_id ]
            )
            
            return res.status(404).json({ message:  'Blog deleted successful'})
        }catch(err){
            return res.status(501).json({ message:  err.message })
        }
    }
}