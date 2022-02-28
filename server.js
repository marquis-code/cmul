const express = require('express');
const app = express();
const morgan = require("morgan");
const helment = require("helmet");
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const connectDB = require('./database/db');

connectDB();

if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(helment());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const nimasitesRouter = require('./routes/Nimasites');
const publishersRouter = require('./routes/Publishers');
const publicationsRouter = require('./routes/Publications');
const visitorsRouter = require('./routes/Visitors');

// map URL starts:
app.use('/api/nimasites', nimasitesRouter); 
app.use('/api/publishers', publishersRouter); 
app.use('/api/publications', publicationsRouter); 
app.use('/api/visitors', visitorsRouter); 

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

module.exports = app;