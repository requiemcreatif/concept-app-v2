import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import codeRoutes from "./routes/codeRoutes.js";

//Middleware
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();
app.use(express.json());
//Routes
app.get("/", (req, res) => {
  res.send("Welcome to the concept app!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/code", codeRoutes);

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
