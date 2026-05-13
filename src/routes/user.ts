import { Router } from "express";

const router = Router();

router.route("/users").get((req, res) => {
    res.json({ message: "Get all users" });
})



export default router;
