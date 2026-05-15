import express from "express";
import type { Request, Response } from "express";
import globalErrorHander from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(express.json());

//Routes
app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Node API Example" });
});



//User Routes
app.use("/api/users",userRouter);


//Global Error Handler
app.use(globalErrorHander);


export default app;
