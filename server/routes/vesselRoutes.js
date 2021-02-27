const express = require('express')
const { vessel_post, vessel_delete } = require('../controllers/vesselController')
const router = express.Router()

router.post('/', vessel_post)
router.delete('/:id', vessel_delete)

module.exports = router