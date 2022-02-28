const express = require('express');
const Nimasite = require('../models/Nimasites');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nimasitesRouter = express.Router();
const { nimasitesAuthValidation } = require('../models/validations/nimasitesAuthValidation');
const { jwtSecret, jwtExpire } = require('../config/keys');

nimasitesRouter.post('/signup', async (req, res) => {
  const { username, matric, college, email, password } = req.body;

  const validationResult = nimasitesAuthValidation.validate(req.body, { abortEarly: false });
  console.log(req.body);
  if (validationResult.error) {
    console.log(validationResult.error.details[0].message);
    let errorMsg = validationResult.error.details[0].message
    return res.status(400).json({ errorMessage: errorMsg });
  }

   try {
    const nimasite = await Nimasite.findOne({email});
    if (nimasite) {
      res.status(400).json({ errorMessage: "User Already Exist" });
    }

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    const newNimasite = new Nimasite({ username, college, matric, email, password:hashedPassword });
    
    await newNimasite.save();

    res.status(201).json({ successMessage: "Registeration success, Please sign in", username });

   } catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong, please try again." });
   }
})

nimasitesRouter.post('/signin', async (req, res) => {
  const {email, password} = req.body;

  try {
    const nimasite = await Nimasite.findOne({email});
    if(!nimasite) {
      res.status(400).json({ errorMessage: "Invalid Login Credentials"});
    } 

    const isMatchPassword = await bcrypt.compare(password, nimasite.password);
    if(!isMatchPassword) {
      res.status(400).json({ errorMessage: "Invalid Login Credentials"});
     } 
    
     const jwtPayload = {
        user : {
          _id : nimasite._id
        }
     }

      jwt.sign(jwtPayload, jwtSecret, {expiresIn : jwtExpire}, (err, token) => {
        if(err) {
          res.status(400).json({ errorMessage: "Jwt Error"});
        }
      
        const {_id, username, email } = nimasite;

        res.status(200).json({ 
          token, 
          user : {_id, username, email}});
      })
  
  } catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong, please try again." });
  }
})

module.exports = nimasitesRouter;
