import { Router } from "express";
import { createUser, loginUser } from "../controller/userController.js";

const userRouter = Router();

userRouter.post("/register",createUser);
userRouter.post("/login",loginUser);




export default userRouter;
