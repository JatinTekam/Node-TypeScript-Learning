import { Router } from "express";
import { createBook } from "../controller/bookController.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";


const bookRouter = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload=multer({
    dest: path.resolve(__dirname,"../../public/data/uploads"),
    limits:{fileSize: 3e7}
})

bookRouter.get("/",upload.fields([
    {name:"coverImage",maxCount:1},
    {name:"file",maxCount:1}
]),createBook);





export default bookRouter;
