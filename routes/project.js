/**
File Name: project.js
Student Name: Chizimuzo Etolue
Student ID: 301279946
Date: September 28, 2023

This file contains the Express route for the "Projects" page of 
this portfolio website development project.

*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pageView", {
    pageTitle: "Projects",
    paragraph: `As a web developer, I have experience working with JavaScript,
    NodeJS, ExpressJS, EJS, HTML and CSS. I solely develop most of my projects and this
    website is one of them. I usually complete the software development lifecycle from
    design to release.`,
  });
});

module.exports = router;
