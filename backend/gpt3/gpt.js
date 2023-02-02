import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function gptCompletion({ message }) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.8,
    max_tokens: 4000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
    stop: ["You:"],
  });
  return response;
}

export default { gptCompletion };
