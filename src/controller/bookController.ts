import {type NextFunction, type Request, type Response } from "express";
import cloudinary from "../config/cloudinary.js";
import createHttpError from "http-errors";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createBook =async (req: Request, res: Response, next: NextFunction) => {
 try {

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const coverImageFiles = files.coverImage;

  if (!coverImageFiles || coverImageFiles.length === 0) {
    const erorr=createHttpError(404,"Cover image is required.")
    return next(erorr);
  }

  const coverImageMimeType = coverImageFiles[0]?.mimetype.split("/")[1];

   const fileName = coverImageFiles[0]?.filename;


   const filePath=path.resolve(__dirname,"../../public/data/uploads",fileName as string);

  const uploadResult = await cloudinary.uploader.upload(filePath,{
    filename_override: fileName,
    folder: "book_covers",
    format: coverImageMimeType
  });


  const bookFile=files.file;

  if(!bookFile || bookFile.length==0){
    const erorr=createHttpError(404,"Cover image is required.")
    return next(erorr);
  }

  const bookFileName=bookFile[0]?.filename;

  const bookFilePath=path.resolve(__dirname,"../../public/data/uploads", bookFileName as string);




  console.log(uploadResult);

  res.json({
    message: "Book created successfully",
  });
 } catch (error) {
   return next(error);
 }

 
};

export { createBook };
