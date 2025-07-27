const fs = require("fs");
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.COHERE_API_KEY });

exports.handleSummarize = async (req, res) => {
  try {
    const file = req.file;
    const content = fs.readFileSync(file.path, "utf8");

    // Prompt to summarize
    const prompt = `Generate a short summary for the following notes:\n\n${content}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const summary = completion.choices[0].message.content;

    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
