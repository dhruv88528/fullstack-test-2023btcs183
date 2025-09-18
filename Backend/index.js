import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import cors from 'cors';
import route from './route/route.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', route);
const port = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    res.send("API is Working");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});