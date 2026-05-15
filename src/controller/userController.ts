import type { NextFunction, Request,Response } from "express"
//import type { RegisterUserRequest } from "../types/types.js";
import createHttpError from "http-errors";
import userModel from "../models/userModel.js";

const createUser=async(req:Request,res:Response,next:NextFunction)=>{
    const {name,email,password}=req.body;

    //ALso check express validator

    if(!name || !email || !password){
        const userDataError=createHttpError(400,"Name, email and password are required");
        return next(userDataError);
        
    }


    //DB Call
    const user=await userModel.findOne({email});

    if(user){
        const error=createHttpError(400,"User with this email already exists");
        return next(error);
    }



    return res.json({
        message: "User created successfully",
       })
}

export {createUser};