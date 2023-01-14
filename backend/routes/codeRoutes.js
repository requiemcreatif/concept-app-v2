import express from "express";
const router = express.Router();

import { createCode, getAllCode, updateCode, deleteCode } from "../controllers/codeController.js";

router.route("/").post(createCode).get(getAllCode);
router.route("/:id").patch(updateCode).delete(deleteCode);

export default router;
