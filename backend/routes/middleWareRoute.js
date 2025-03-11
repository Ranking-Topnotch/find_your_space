const router = require('express').Router()
const middleWare = require('../controllers/middleWareController')

router.get('/auth/check', middleWare.authenticateAgent, (req, res) => {
    console.log(1.1)
    return res.status(200).json({ message: "Authenticated" })
})

module.exports = router