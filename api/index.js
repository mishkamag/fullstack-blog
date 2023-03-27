const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// middleware
app.use(express.json());

mongoose
  .connect(process.env.URL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
