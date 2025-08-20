const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 5000;

const genAI = new GoogleGenerativeAI("your-api-key"); // Replace with your Gemini API key

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

app.post("/caption", async (req, res) => {
  try {
    const base64Image = req.body.image;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "give the short description of the image to help the visually impaired people. give only the descriptions withoout any comments.";

    const image = {
      inlineData: {
        data: base64Image,
        mimeType: "image/png",
      },
    };

    const result = await model.generateContent([prompt, image]);
    const caption = result.response.text();

    res.json({ caption });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ caption: "Failed to generate description." });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

