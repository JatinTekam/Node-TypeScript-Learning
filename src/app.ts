import express from "express";
import type { Request, Response } from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/userRouter.js";
import bookRouter from "./routes/bookRouter.js";

const app = express();

app.use(express.json());

//Routes
app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Node API Example" });
});



//User Routes
app.use("/api/users",userRouter);
app.use("/api/books",bookRouter);


//Global Error Handler
app.use(globalErrorHandler);


export default app;
