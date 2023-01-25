import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import codeRoutes from "./routes/codeRoutes.js";
const app = express();

//Middleware
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

//OPEN AI API
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-bE3vnxyaksA6Km344Pgi1pS7",
  apiKey: process.env.OPENAI_API_KEY,
});

//console.log(configuration.apiKey);

const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

app.post("/api/v1/ai", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `{prompt}`,
      maxTokens: 3000,
      temperature: 0.9,
      topP: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    res.status(200).json({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});
///////////////////////////////////////

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
//Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the concept app!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/codes", authenticateUser, codeRoutes);
app.use("/api/v1/codes/all", codeRoutes);
//app.use("/api/v1/codes/ai", codeRoutes);

app.use(notFound);
app.use(errorHandler);

//Server listening
const port = process.env.PORT || 8000;

// Connect to the database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server running on port http://localhost:${port} for the Concept app`)
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

start();
