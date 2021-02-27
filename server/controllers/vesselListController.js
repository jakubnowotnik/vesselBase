const Vessel = require('../models/vessel')

const vesselList_get = (req, res) => {

  Vessel.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
}


module.exports = {
  vesselList_get
}