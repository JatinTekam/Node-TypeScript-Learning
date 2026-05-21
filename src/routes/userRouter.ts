import { Router } from "express";
import { allUsers, createUser, loginUser } from "../controller/userController.js";
import verifyJwtToken from "../middlewares/verifyToken.js";

const userRouter = Router();

userRouter.post("/register",createUser);
userRouter.post("/login",loginUser);

// verifyJwtToken
userRouter.get("/verifyToken",verifyJwtToken,allUsers);




export default userRouter;
