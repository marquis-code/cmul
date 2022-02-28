const express = require('express');
const Visitor = require('../models/Visitors');
const bcrypt = require('bcrypt');
const visitorsRouter = express.Router();
const { visitorsAuthValidation } = require('../models/validations/visitorsAuthValidation');

visitorsRouter.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  const validationResult = visitorsAuthValidation.validate(req.body, { abortEarly: false });
  if (validationResult.error) {
    console.log(validationResult.error);
    return res.status(400).json({ errorMessage: "Oops!!! Please Enter All Fields information Correctly." });
  }

   try {
    const visitor = await Visitor.findOne({email});
    if (visitor) {
      res.status(400).json({ errorMessage: "User Already Exist" });
    }

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);

    const newVisitor = new Visitor({ username, email, password:hashedPassword });
    
    await newVisitor.save();

    res.status(201).json({ successMessage: "Registeration success, Please sign in", username });

   } catch (error) {
    res.status(500).json({ errorMessage: "Something went wrong, please try again." });
   }
})

module.exports = visitorsRouter;
