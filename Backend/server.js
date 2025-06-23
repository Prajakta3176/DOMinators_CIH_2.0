import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { conn } from './connection/conn.js';
import userRouter from './routes/user.js';
import complaintRouter from './routes/complaint.js';
import "./reminder.js"


dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());
server.use("/uploads", express.static("uploads"));

server.get('/',(req,res)=>{
    res.send('Welcome to the API');
})
conn();
server.use('/api/user',userRouter);
server.use("/api/complaint",complaintRouter);

server.listen(process.env.PORT ,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})