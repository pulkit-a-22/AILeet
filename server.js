require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = 3000;

app.use(cors({ origin: 'https://leetcode.com' }));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/get-hint', async (req, res) => {
  const { prompt, hintCount } = req.body;

  console.log('Received prompt from client:', prompt);
  console.log('Received hint count from client:', hintCount);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Specify the model here
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
    });

    console.log('OpenAI response:', response);

    res.json({ hint: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error('Error fetching hint from OpenAI:', error);
    res.status(500).json({ error: 'An error occurred while fetching the AI hint.' });
  }
});

app.listen(port, () => {
  console.log(`AILeet server is running on http://localhost:${port}`);
});
