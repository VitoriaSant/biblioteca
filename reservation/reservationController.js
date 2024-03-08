const express = require("express");
const router = express.Router();

router.get("admin/reservation/new", (req, res) => {
  res.render("/admin/reservation/new");
});

module.exports = router;