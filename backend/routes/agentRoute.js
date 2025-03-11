const router = require('express').Router()
const agentController = require('../controllers/agentController')

router.post('/signup', agentController.agentSignUp )

router.post('/agentlogin', agentController.agentLogin )

router.post('/api/auth/logout', agentController.agentLogout)
module.exports = router