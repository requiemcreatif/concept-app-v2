import "express-async-errors";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import codeRoutes from "./routes/codeRoutes.js";
const app = express();

//openai
/*import { OpenAIApi } from "openai";
const openai = process.env.OPENAI_API_KEY;
app.get("/generate-code", (req, res) => {
  const prompt = "generate code snippet for a JavaScript function that sorts an array";

  openai.completions.create(
    {
      engine: "text-davinci-002",
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.5,
    },
    (error, response) => {
      if (error) {
        res.status(500).send(error);
      } else {
        const codeSnippet = response.choices[0].text;
        res.send({ codeSnippet });
      }
    }
  );
});*/
////////////////////////
//Middleware
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors());
//Routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the concept app!" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/code", authenticateUser, codeRoutes);

app.use(notFound);
app.use(errorHandler);

//Server listening
const port = process.env.PORT || 8000;

// Connect to the database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server running on port ${port} for the Concept app`));
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

start();
