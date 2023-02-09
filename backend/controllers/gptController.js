import { StatusCodes } from "http-status-codes";
import { WrongRequestError } from "../errors/index.js";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-VVDW85vv1o5Nel5Uiy8ckawX",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const gptChat = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      temperature: 0,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      stop: ["You:"],
    });
    res.status(StatusCodes.OK).json({
      message: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    throw new WrongRequestError(error);
  }
  ///console.log(response.data.choices[0].text);
};

export { gptChat };
