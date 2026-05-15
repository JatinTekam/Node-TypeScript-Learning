import express from "express";
import type { Request, Response } from "express";
import globalErrorHander from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/userRouter.js";

const app = express();

//Routes
app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Node API Example" });
});

//Global Error Handler
app.use(globalErrorHander);

//User Routes
app.use("/api/users",userRouter)


export default app;
