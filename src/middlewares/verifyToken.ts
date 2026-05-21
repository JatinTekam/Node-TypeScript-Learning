import type { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";
import type { jwtTokenPayload } from "../types/types.js";
import { config } from "../config/config.js";

async function verifyJwtToken(req: Request, res: Response, next: NextFunction) {
  try {
    const authToken = req.headers?.authorization;

    //console.log(authToken);

    if (!authToken || !authToken.startsWith("Bearer ")) {
      const error = createHttpError(401, "Token not found");
      return next(error);
    }

    const token = authToken.split(" ")[1];

    const decoded = jwt.verify(
      token as string,
      config.jwtSecret as string,
    ) as jwtTokenPayload;

    req.user = decoded;
  } catch (error) {
    const err = createHttpError(401, "Invalid or expired token");
    return next(err);
  }

  next();
}

export default verifyJwtToken;
