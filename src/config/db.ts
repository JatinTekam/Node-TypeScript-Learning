import mongoose from "mongoose";
import { config } from "./config.js";

async function dbConnction() {
  try {

    mongoose.connection.on('connected',()=>{
      console.log('Database connected successfully');
   })

   mongoose.connection.on('error',(error)=>{
      console.error('Database connection error:',error);
   })

   await mongoose.connect(config.dbUrl as string);

  } catch (error) {
   console.error('Failed to connect to the database',error);
   process.exit(1);
  }
}

export default dbConnction;
