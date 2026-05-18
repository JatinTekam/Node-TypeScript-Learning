import { Router } from "express";
import { createBook } from "../controller/bookController.js";


const bookRouter = Router();

bookRouter.get("/",createBook);





export default bookRouter;
