/**
File Name: home.js
Student Name: Chizimuzo Etolue
Student ID: 301279946
Date: September 28, 2023

This file contains the Express route for the "Home" page of 
this portfolio website development project.

*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("home", { webTitle: "Chizimuzo Etolue | Home" });
});

module.exports = router;
