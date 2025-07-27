const fs = require("fs");
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.COHERE_API_KEY });

exports.handleQuiz = async (req, res) => {
  try {
    const file = req.file;
    const content = fs.readFileSync(file.path, "utf8");

    const prompt = `Based on the following notes, generate a 5-question multiple choice quiz with answers:\n\n${content}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const quiz = completion.choices[0].message.content;

    res.json({ quiz });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Quiz generation failed" });
  }
};
