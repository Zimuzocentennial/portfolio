/*
File Name: index.js
Student Name: Chizimuzo Etolue
Student ID: 301279946
Date: September 28, 2023

This is the central Express router that contains all
the routes used in my portfolio web development project.
*/

var express = require("express");
var router = express.Router();

const homeRouter = require("./home");
const aboutRouter = require("./about");
const projectRouter = require("./project");
const serviceRouter = require("./service");
const contactRouter = require("./contact");

router.use("/", homeRouter);
router.use("/about", aboutRouter);
router.use("/projects", projectRouter);
router.use("/services", serviceRouter);
router.use("/contact", contactRouter);

module.exports = router;
