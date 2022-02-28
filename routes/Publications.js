const express = require('express');
const publicationsRouter = express.Router();
const Publication = require('../models/Publications');
const {publicationsAuthValidation} = require('../models/validations/publicationsAuthValidation');

publicationsRouter.post('/new',(req, res) => {
  const {journalTitle, journalAbstract, journalField, journalImage} = req.body;
  console.log(req.body);
} )


module.exports = publicationsRouter;