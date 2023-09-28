/*
File Name: service.js
Student Name: Chizimuzo Etolue
Student ID: 301279946
Date: September 28, 2023

This file contains the Express route for the "Services" page of 
this portfolio website development project.

*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pageView", {
    pageTitle: "Services",
    paragraph: `I use HTML, CSS and JavaScript to turn design concepts
    into functional websites, ensuring they are user friendly, responsive and
    visually appealing. I am constantly learning and adapting to evolving web
    technologies to deliver seamless online experience.`,
  });
});

module.exports = router;
