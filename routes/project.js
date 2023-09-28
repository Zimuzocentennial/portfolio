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
    paragraph: `Projects ipsum dolor sit, amet consectetur adipisicing elit. Officia
    necessitatibus, sequi pariatur accusamus fugit hic placeat. Odit numquam
    quaerat maxime nobis corrupti ullam. Doloremque modi fugit ex qui,
    perspiciatis odit quae maxime eveniet id sed.`,
  });
});

module.exports = router;
