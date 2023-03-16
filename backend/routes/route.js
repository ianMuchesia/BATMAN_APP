const express = require('express')
const {postRequest, generateImageRequest}  = require('../controllers/postDalleRoute')
const getRequest  = require('../controllers/getDalleRoute')
const router = express.Router()


router.post('/community', postRequest)
router.post('/image', generateImageRequest)
router.get('/', getRequest)



module.exports = router