import express from "express";
const router = express.Router();

import { createGpt, getAllGpts } from "../controllers/gptController.js";

router.route("/").post(createGpt).get(getAllGpts);

export default router;
