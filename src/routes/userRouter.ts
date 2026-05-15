import { Router } from "express";
import { createUser } from "../controller/userController.js";

const userRouter = Router();

// userRouter.route("/register").get((req, res) => {
//     res.json({ message: "Get all users" });
// })
userRouter.post("/register",createUser)




export default userRouter;
