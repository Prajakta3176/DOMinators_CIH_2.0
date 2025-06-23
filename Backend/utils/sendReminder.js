import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import Government from "../models/gov.js" // adjust the path
dotenv.config();

export async function sendReminder(issue) {
  try {
    // 🔍 Step 1: Find govt official based on issue category & city
    const gov = await Government.findOne({
      department: issue.category,
      city: issue.city
    });

     console.log("Government: " , gov);

    if (!gov) {
      console.log(`❌ No government email found for category ${issue.category} in ${issue.city}`);
      return;
    }

   

    // ✅ SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // ✅ Mail setup
    const mailOptions = {
      from: `"CivicEye Alerts" <${process.env.EMAIL_USER}>`,
      to: gov.email,  // 🎯 fetched dynamically
      subject: "🚨 CivicEye - Issue Pending Reminder",
      text: `Hello Sir/Madam,\n\nThe issue "${issue.title}" under category "${issue.category}" in ${issue.city} has received ${issue.upvotes} upvotes and has been pending for over 7 days.\n\nPlease take necessary action.\n\nRegards,\nCivicEye Team`,
    };

    // ✅ Send the mail
    const info = await transporter.sendMail(mailOptions);
    console.log(`📨 Reminder sent to ${gov.email}:`, info.messageId);
  } catch (err) {
    console.error("❌ Failed to send reminder:", err);
  }
}
