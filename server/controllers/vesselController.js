const Vessel = require('../models/vessel')


const vessel_post = (req, res) => {

  const vessel = new Vessel(req.body)
  vessel.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))

}

const vessel_delete = (req, res) => {

  const id = req.params.id
  Vessel.findByIdAndDelete(id)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))

}

module.exports = {
  vessel_post,
  vessel_delete
}