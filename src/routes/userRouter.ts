import { Router } from "express";
import { createUser, loginUser } from "../controller/userController.js";

const userRouter = Router();

// userRouter.route("/register").get((req, res) => {
//     res.json({ message: "Get all users" });
// })
userRouter.post("/register",createUser);
userRouter.post("/login",loginUser);




export default userRouter;
