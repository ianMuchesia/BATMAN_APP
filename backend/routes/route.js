const express = require('express')
const postRequest  = require('../controllers/postDalleRoute')
const getRequest  = require('../controllers/getDalleRoute')
const router = express.Router()


router.post('/', postRequest)
router.get('/', getRequest)



module.exports = router