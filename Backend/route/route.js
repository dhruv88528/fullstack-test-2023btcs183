import express from "express";
import { handleContact } from "../controller/authController.js";

const router= express.Router();

router.post('/send',handleContact)
export default router;


