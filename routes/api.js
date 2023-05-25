
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const Event = require('../models/event');
const SpecialEvent = require('../models/specialEvent');


 mongoose.connect("mongodb://127.0.0.1:27017/EventHub", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB: ' + error);
  });

  
  function verifyToken(req, res, next) 
  {
    if(!req.headers.authorization) 
    {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') 
    {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) 
    {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }



router.get('/events', (req, res) => {
  Event.find({}, (err, events) => {
    if (err) {
      console.log('Error occurred while fetching events:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(events);
    }
  });
});

router.get('/special', verifyToken, (req, res) => {
  SpecialEvent.find({}, (err, specialEvents) => {
    if (err) {
      console.log('Error occurred while fetching special events:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(specialEvents);
    }
  });
});


router.post('/login', (req, res) => {
  let userData = req.body
  
  if ((userData.email == "Marvellous") && (userData.password == "Marvellous")) 
  {
    let payload = {subject: 1}
    let token = jwt.sign(payload, 'secretKey')
    res.status(200).send({token})   
  } 
  else 
  {
      res.status(401).send('Invalid Password')
  } 
});


module.exports = router;

