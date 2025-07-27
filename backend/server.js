const express = require("express");
const cors = require("cors");
require("dotenv").config();

const summarizeRoutes = require("./routes/summary");
const quizRoutes = require("./routes/quiz");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/summarize", summarizeRoutes);
app.use("/api/quiz", quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
