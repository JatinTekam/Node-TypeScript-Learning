import type { NextFunction, Request,Response } from "express"
//import type { RegisterUserRequest } from "../types/types.js";
import createHttpError from "http-errors";

const createUser=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password}=req.body;

    //ALso check express validator

    if(!name || !email || !password){
        const userDataError=createHttpError(400,"Name, email and password are required");
        return next(userDataError);
        
    }

    return res.json({
        message: "User created successfully",
       })
}

export {createUser};