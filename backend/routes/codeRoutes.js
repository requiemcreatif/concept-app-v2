import express from "express";
const router = express.Router();

import { createCode, getAllCodes, updateCode, deleteCode } from "../controllers/codeController.js";

router.route("/").post(createCode).get(getAllCodes);
router.route("/:id").patch(updateCode).delete(deleteCode);

export default router;
