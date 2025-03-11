const express = require('express')
const db = require('../dbConnection')

module.exports = {
    postSpace: async ( req, res ) => {
        console.log(req.body)
        const { 
            agent_id,
            status,
            houseImg1, 
            houseImg2, 
            houseImg3,
            spaceType,
            rentAmount,
            address,
            bedroomNo,
            bathroomNo,
            garageNo,
            area,
            spaceDesc,
            feature1,
            feature2,
            feature3,
            feature4,
            feature5,
        } = req.body
        
        
        if( !agent_id || !status || !houseImg1 || !houseImg2 || !houseImg3 || !spaceType || !rentAmount || !address || !bedroomNo  || !bathroomNo || !spaceDesc || !feature1 || !feature2 ){
            return res.status(404).json({ message: 'All field are mandatory'})
        }

        try{
            await db.query(
                'INSERT INTO space (agent_id, houseImg1, houseImg2, houseImg3, spaceType, rentAmount, address, bedroomNo, bathroomNo, garageNo, area, status, spaceDesc, feature1, feature2, feature3, feature4, feature5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [agent_id, houseImg1, houseImg2, houseImg3, spaceType, rentAmount, address, bedroomNo, bathroomNo, garageNo, area, status, spaceDesc, feature1, feature2, feature3, feature4, feature5]
              );              

            return res.status(404).json({ message:  'Space uploaded successfully'})
        }catch(err){
            return res.status(500).json({ message:  err.message })
        }
    },

    getSpace: async ( req, res ) => {
        try{
            const space = await db.query('SELECT * FROM space');

            return res.status(200).json(space)
        }catch(err){
            return res.status(501).json({ message:  err.message })
        }
    }
}