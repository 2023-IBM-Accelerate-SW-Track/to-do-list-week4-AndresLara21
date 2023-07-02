// import external modules and reading environment variables
const express = require("express"),
       app = express(),
       port = process.env.PORT || 8080, //8080 is port number, can be any of choice
       cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs").promises;

//set up express application and return message back to console one running
app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.listen(port, () => console.log("Backend server live on " + port));