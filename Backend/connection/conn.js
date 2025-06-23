import mongoose from "mongoose";

export const conn = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        })
        console.log("Connected to MongoDB successfully");
    }catch(err){
        console.error("Error in connection:", err);
    }

}