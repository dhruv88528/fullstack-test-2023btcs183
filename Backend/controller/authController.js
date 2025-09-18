import info from "../config/nodemailer.js";
import userModel from "../model/usermodel.js";

export const handleContact = async (req, res) => {
    try{
        const {name, email, message} = req.body;
        if(!name || !email || !message){
            return res.status(400).json({message: "All fields are required"});
        }
        const newUser = new userModel({name, email, message});
        await newUser.save();

        await info(name, email, message);

        res.status(200).json({message: "Email sent successfully"});
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({message: "Server Error"});
    }
};

