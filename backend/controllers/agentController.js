const express = require('express')
const db = require('../dbConnection')
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    agentSignUp: async ( req, res ) => {
        const {
            name,
            officePhone,
            homePhone,
            email,
            companyName,
            address,
            password,
            confirmPassword,
            facebook,
            x,
            linkdin,
            instagram,
            profileImage,
            agentAttestation
        } = req.body
        
        if(!name || !officePhone || !email || !companyName || !address || !password || !confirmPassword || !agentAttestation ) {
            return res.status(404).json({ message:  'All field are mandatory'})
        }

        try{
            const [ existingUser ] = await db.query(
                'SELECT * FROM agent WHERE email = ?',
                [ email ]
            );
    
            if(existingUser.length > 0 ){
                return res.status(400).json({ message:  'Agent with email already exist'})
            }

            if(password !== confirmPassword){
                return res.status(401).json({ message: `Password didn't match` })
            }

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt);
            
            await db.query(
                'INSERT INTO agent ( name, officePhone, homePhone, email, companyName, address, password, facebook, x, linkdin, instagram, profileImage, agentAttestation ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [ name, officePhone, homePhone, email, companyName, address, hashPassword, facebook, x, linkdin, instagram, profileImage, agentAttestation ]
            );

            return res.status(201).json({ message: "Signup sucessful"})

        }catch(err){
            return res.status(500).json({ message: err.message})
        }
    },

    agentLogin: async ( req, res ) => {
        const { email, password } = req.body

        if(!email || !password ){
            return res.status(404).json({ message: "All field are mandantory"})
        }

        try{
            const agentDetail = await db.query(
                'SELECT * FROM agent WHERE email = ?',
                [ email ]
            )
            console.log(agentDetail)

            if(agentDetail[0].length === 0){
                return res.status(404).json({ message: "Incorrect email address"})
            }

            const checkPassword = await bcrypt.compare(password, agentDetail[0][0].password)

            if(!checkPassword){
                return res.status(404).json({ message: "Password is incorrect"})
            }

            const accessToken = jwt.sign(
                { agentId: agentDetail[0][0].agent_id, agentEmail: agentDetail[0][0].email },
                process.env.ACCESS_TOKEN,
                { expiresIn: '24h' }
            )

            // Set the token in an HTTP-only cookie
            res.cookie('token', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', 
                sameSite: 'lax', 
                maxAge: 24 * 60 * 60 * 1000, 
            });
           
            return res.status(200).json({ agent: agentDetail[0][0], message: "Login successful"})
        }catch(err){

        }
    },

    agentLogout: (req, res) => {
        res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "Strict" });
        res.status(200).json({ message: "Logged out successfully" });
    }
    
}