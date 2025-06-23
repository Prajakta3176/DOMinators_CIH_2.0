import { sendReminder } from "./utils/sendReminder.js";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB from testReminder");

    const dummyIssue = {
      title: "Pothole near main market",
      upvotes: 28,
      city: "Nagpur",
      category: "Drainage"
    };

    await sendReminder(dummyIssue);

    await mongoose.disconnect();
    console.log("🔌 MongoDB Disconnected after test");
  } catch (err) {
    console.error("❌ Error:", err);
  }
};

connectMongo();