import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

class ApiError extends Error {
  constructor(message) {
    super(message);
    //this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

class WrongRequestError extends ApiError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

class ErrorNotFound extends ApiError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.NOT_FOUND;
  }
}

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new WrongRequestError("Please you must provide all fields");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new WrongRequestError("This email is already registered");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("Update user");
};

export { register, login, updateUser };
