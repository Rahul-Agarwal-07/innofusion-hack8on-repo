const express = require("express");
const multer = require("multer");
const { handleQuiz } = require("../controllers/quizController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), handleQuiz);

module.exports = router;

