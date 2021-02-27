const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vesselSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  grossTonnage: {
    type: String,
    required: true
  },

}, { timestamps: true })

const Vessel = mongoose.model('vessel', vesselSchema)

module.exports = Vessel