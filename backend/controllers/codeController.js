import { StatusCodes } from "http-status-codes";
import { WrongRequestError, ErrorNotFound, NotAuthenticatedError } from "../errors/index.js";
import Code from "../models/Code.js";
import checkPermissions from "../utility/checkPermissions.js";

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
  const { codeStatus, language, title, search } = req.query;
  const query = {
    createdBy: req.user.userId,
  };

  // if (codeStatus !== "all") {
  //   query.codeStatus = codeStatus;
  // }
  let result = Code.find(query);

  const codes = await result;

  res.status(StatusCodes.OK).json({ codes, totalCodes: codes.length, numOfPages: 1 });
};

const updateCode = async (req, res) => {
  const { id: codeId } = req.params;
  const { title, description, code, language, codeStatus } = req.body;

  if (!title || !description || !code || !language || !codeStatus) {
    throw new WrongRequestError("Please provide all fields.");
  }
  const codeUpdate = await Code.findOne({ _id: codeId });

  if (!codeUpdate) {
    throw new ErrorNotFound(`Code not found with id: ${codeId}`);
  }

  // Check if the user is the owner of the code

  // console.log(typeof req.user.userId);
  // console.log(typeof codeUpdate.createdBy);

  checkPermissions(req.user, codeUpdate.createdBy);
  const updatedCode = await Code.findOneAndUpdate({ _id: codeId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updatedCode });
};

const deleteCode = async (req, res) => {
  const { id: codeId } = req.params;
  const code = await Code.findOne({ _id: codeId });

  if (!code) {
    throw new ErrorNotFound(`Code not found with id: ${codeId}`);
  }

  checkPermissions(req.user, code.createdBy);
  await Code.remove();

  res.status(StatusCodes.OK).json({ msg: "Code deleted successfully." });
};

export { createCode, getAllCodes, updateCode, deleteCode };
