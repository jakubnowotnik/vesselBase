const express = require('express')
const { vesselList_get } = require('../controllers/vesselListController')
const router = express.Router()

router.get('/', vesselList_get)

module.exports = router