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
