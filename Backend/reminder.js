// reminderJob.js
import cron from "node-cron";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Issue from "./models/Issue.js";
import { sendReminder } from './utils/sendReminder.js';

dotenv.config();

// 🔁 1. Connect DB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ [ReminderJob] DB connected"))
  .catch((err) => console.error("❌ DB Error", err));

// 🔁 2. Schedule cron (every day at 9AM)
cron.schedule("0 9 * * *", async () => {
  console.log("⏰ Running CivicEye Auto-Reminder Job");

  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  try {
    // 🔍 3. Find issues for reminder
    const issues = await Issue.find({
      status: "pending",
      $or: [
        { upvotes: { $gte: 20 } },
        { createdAt: { $lte: oneWeekAgo } }
      ]
    });

    console.log(`🔎 Found ${issues.length} issues for reminder.`);

    for (let issue of issues) {
      await sendReminder(issue);
    }

  } catch (err) {
    console.error("❌ Reminder Job Failed:", err.message);
  }
});
