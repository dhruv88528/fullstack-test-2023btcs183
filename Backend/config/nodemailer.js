import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Function to send mail
const sendMail = async (name, email, message) => {
  try {
    const info = await transporter.sendMail({
      from: `"Dhruv Kumar" <${process.env.GMAIL_USER}>`,
      to: email, // recipient
      subject: "Hello ✔",
      html: `<b>Hello ${name},</b><p>${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendMail;
