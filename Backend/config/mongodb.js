import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error(error.message);

    }
};
export default connectDB;