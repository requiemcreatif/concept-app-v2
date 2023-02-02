import gptCompletion from "../gpt3/gpt.js";
import Gpt from "../models/Gpt.js";
import { StatusCodes } from "http-status-codes";
import { WrongRequestError, ErrorNotFound, NotAuthenticatedError } from "../errors/index.js";
import checkPermissions from "../utility/checkPermissions.js";

const createGpt = async (req, res) => {
  const { message } = req.body;
  if (!message) {
    throw new WrongRequestError("At least ask me something :).");
  }
  //req.body.createdBy = req.user.userId;
  const newGpt = await Gpt.create(req.body);
  res.status(StatusCodes.CREATED).json({ newGpt });
};

const getAllGpts = async (req, res) => {
  const { message } = req.body;

  res.status(StatusCodes.OK).json({ message });
};

export { createGpt, getAllGpts };
