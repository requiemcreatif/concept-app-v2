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

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
//Middleware
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
import raterLimit from "express-rate-limit";

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// prevent mongo injection
app.use(mongoSanitize());

// Rate limiting
const limiter = raterLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100,
});

app.use(limiter);
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
const port = process.env.PORT || 5000;

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
