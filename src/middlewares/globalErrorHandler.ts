import {HttpError} from "http-errors";
import type{ Request, Response, NextFunction } from "express";
import { config } from "../config/config.js";



const globalErrorHandler = (error:HttpError,req:Request,res:Response,next:NextFunction)=>{
    const code=error.statusCode || 500;

    

    res.status(code).json({
        message: error.message || "Internal Server Error",
        errorStack: config.env === 'development' ? error.stack : '',
    })
}


export default globalErrorHandler;