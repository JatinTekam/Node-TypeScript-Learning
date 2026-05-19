import type { NextFunction, Request, Response } from "express";

const createBook = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.files);

  res.json({
    message: "Book created successfully",
  });
};

export { createBook };
