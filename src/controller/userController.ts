import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import createHttpError from "http-errors";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import type { User } from "../types/userTypes.js";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    //ALso check express validator

    if (!name || !email || !password) {
      const userDataError = createHttpError(
        400,
        "Name, email and password are required",
      );
      return next(userDataError);
    }

    const user: User | null = await userModel.findOne({ email });

    if (user) {
      const error = createHttpError(400, "User with this email already exists");
      return next(error);
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      password: hashpassword,
    });

    return res.status(201).json({
      id: newUser._id,
      message: "User created successfully",
      email: newUser.email,
    });
  } catch (error) {
    return next(createHttpError(500, "Error while creating user"));
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const userDataError = createHttpError(
        400,
        "Email and password are required",
      );
      return next(userDataError);
    }

    const dbUser: User | null = await userModel.findOne({ email });

    if (!dbUser) {
      const error = createHttpError(404, "User not found");
      return next(error);
    }

    const matchPassword = await bcrypt.compare(password, dbUser.password);

    if (!matchPassword) {
      const error = createHttpError(401, "Invalid password");
      return next(error);
    }

    const token = jwt.sign({ sub: dbUser._id }, config.jwtSecret as string, {
      algorithm: "HS256",
      expiresIn: "1d",
    });

    res.json({
      message: "Login successful",
      accessToken: token,
      user: {
        id: dbUser._id,
        name: dbUser.name,
        email: dbUser.email,
      },
    });
  } catch (error) {
    return next(createHttpError(500, "Error while creating jwt token"));
    //return next(error);
  }
};

export { createUser, loginUser };
