const express = require("express");
const multer = require("multer");
const { handleSummarize } = require("../controllers/summaryController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), handleSummarize);

module.exports = router;
