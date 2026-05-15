import express from "express";
import type { Request, Response } from "express";
//import createHttpError from "http-errors";
//import type { User } from "./types/types.js";
import globalErrorHander from "./middlewares/globalErrorHandler.js";

const app = express();

//Routes
app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Node API Example" });
});

//Global Error Handler
app.use(globalErrorHander);

export default app;
