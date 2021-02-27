const express = require('express');
const mongoose = require('mongoose');
const vesselRoutes = require('./routes/vesselRoutes')
const vesselListRoutes = require('./routes/vesselListRoutes')

const app = express();

const dbURI = 'mongodb+srv://test_vesselBase:vesselBase@vesselbase.qmxod.mongodb.net/vesselBase?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected")
    app.listen(3001);
  })
  .catch((err) => console.log(err))

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', "*")
  res.header('Access-Control-Allow-Methods', '*')

  // console.log('host:', req.hostname);
  // console.log('path:', req.path);
  // console.log('method:', req.method);
  next()
})

//routes
app.use('/vessel', vesselRoutes)
app.use('/vesselList', vesselListRoutes)
