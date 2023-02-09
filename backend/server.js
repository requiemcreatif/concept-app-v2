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
import gptRoutes from "./routes/gptRoutes.js";
//import { createGpt, getAllGpts } from "./controllers/gptController.js";
//import gptCompletion from "./gpt3/gpt.js";
const app = express();
//import Code from "./models/Code.js";

//Middleware
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

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
app.use("/gpt", gptRoutes);
//app.use("/api/v1/gpt/all", gptRoutes);

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
