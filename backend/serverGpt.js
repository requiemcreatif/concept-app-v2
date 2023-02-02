import express from "express";
import dotenv from "dotenv";
import { ChatGPTAPI } from "chatgpt";
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";

dotenv.config();
const port = process.env.port || 3000;

const app = express();

app.use(cors());

app.use(express.json());

const config = new Configuration({
  organization: "org-bE3vnxyaksA6Km344Pgi1pS7",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const cache = [];

function stringify(obj) {
  let str = JSON.stringify(obj, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        return;
      }
      cache.push(value);
    }
    return value;
  });
  cache.length = 0;
  return str;
}

app.post("/openai", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.8,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      stop: ["You:"],
    });
    res.send(stringify(response));
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} from the GPT side`)
);
