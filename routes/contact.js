const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pageView", {
    pageTitle: "Contact",
    paragraph: `Contact ipsum dolor sit, amet consectetur adipisicing elit. Officia
    necessitatibus, sequi pariatur accusamus fugit hic placeat. Odit numquam
    quaerat maxime nobis corrupti ullam. Doloremque modi fugit ex qui,
    perspiciatis odit quae maxime eveniet id sed.`,
  });
});

module.exports = router;
