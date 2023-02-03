import express from "express";
const router = express.Router();

import { gptChat } from "../controllers/gptController.js";

router.post("/gptchat", gptChat);

export default router;
