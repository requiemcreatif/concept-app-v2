import { StatusCodes } from "http-status-codes";
import { WrongRequestError, ErrorNotFound, NotAuthenticatedError } from "../errors/index.js";
import Code from "../models/Code.js";

const createCode = async (req, res) => {
  const { title, code } = req.body;

  if (!title || !code) {
    throw new WrongRequestError("Please provide all fields.");
  }
  req.body.createdBy = req.user.userId;
  const newCode = await Code.create(req.body);
  res.status(StatusCodes.CREATED).json({ newCode });
};

const getAllCodes = async (req, res) => {
  const codes = await Code.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ codes, totalCodes: codes.length, numOfPages: 1 });
};

const updateCode = async (req, res) => {
  res.send("Update code");
};

const deleteCode = async (req, res) => {
  res.send("Delete code");
};

export { createCode, getAllCodes, updateCode, deleteCode };
