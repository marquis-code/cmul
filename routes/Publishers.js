const express = require('express');
const Publisher = require('../models/Publishers');
const bcrypt = require('bcrypt');
const publishersRouter = express.Router();
const { publishersAuthValidation } = require('../models/validations/publishersAuthValidation');

publishersRouter.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  const validationResult = publishersAuthValidation.validate(req.body, { abortEarly: false });
  if (validationResult.error) {
    console.log(validationResult.error);
    return res.status(400).json({ errorMessage: "Oops!!! Please Enter All Fields information Correctly." });
  }

   try {
    const publisher = await Publisher.findOne({email});
    if (publisher) {
      res.status(400).json({ errorMessage: "User Already Exist" });
    }

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    const newPublisher = new Publisher({ username, email, password:hashedPassword });
    
    await newPublisher.save();

    res.status(201).json({ successMessage: "Registeration success, Please sign in", username });

   } catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong, please try again." });
   }
})

module.exports = publishersRouter;
