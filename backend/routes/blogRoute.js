const router =  require('express').Router()
const blogController = require('../controllers/blogController')

router.post('/newblog', blogController.postBlog)

router.get('/', blogController.getBlog)

router.delete('/', blogController.deleteBlog)




module.exports = router