const express = require('express')
const authenticateUser = require('../middlewares/authentication')
const {postRequest, generateImageRequest}  = require('../controllers/postDalleRoute')
const {getAllPosts, getMyAllPosts, getSinglePost}  = require('../controllers/getDalleRoute')
const router = express.Router()


router.post('/community',authenticateUser, postRequest)
router.post('/image', generateImageRequest)
router.get('/', getAllPosts)
router.get('/:id', getSinglePost)
router.get('/myposts',authenticateUser,getMyAllPosts)



module.exports = router