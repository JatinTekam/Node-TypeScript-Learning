import express from 'express';
import type { User } from './types/types.js';
import type {Request,Response} from 'express';

const app=express();


//Routes
app.get("/",async(req:Request,res:Response)=>{
    const users=await fetch("https://jsonplaceholder.typicode.com/users");
    let response=await users.json() as unknown as User[];

    response=response.map((user)=>{
        user.name=user.name.toUpperCase();
        return user;
    })

    res.json({data:response});
})




export default app;