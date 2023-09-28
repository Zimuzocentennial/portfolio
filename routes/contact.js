/**
File Name: contact.js
Student Name: Chizimuzo Etolue
Student ID: 301279946
Date: September 28, 2023

This file contains the Express route for the "Contact" page of 
this portfolio website development project.

*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pageView", {
    pageTitle: "Contact",
    paragraph: `As a seasoned web developer, I use HTML, CSS and JavaScript to transform design
    concepts into functional websites, ensuring they are user
    friendly, responsive and visually appealing. I'd love to hear from you!`,
  });
});

module.exports = router;
