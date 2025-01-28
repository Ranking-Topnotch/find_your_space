const router = require('express').Router()
const spaceController = require('../controllers/spaceController')

router.post('/postspace', spaceController.postSpace)

router.get('/', spaceController.getSpace)


module.exports = router