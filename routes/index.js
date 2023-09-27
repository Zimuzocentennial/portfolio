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
