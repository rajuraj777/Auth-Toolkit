import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
dotenv.config({
   path:'./env'
})

connectDB().
then(()=>{
   app.listen(process.env.PORT || 3000,()=>{
      console.log(`Process is running on ${process.env.PORT} || 3000`)
   })
}).catch((err)=>{
   console.log(`Mongo DB connection failed Error:`,err)
})
