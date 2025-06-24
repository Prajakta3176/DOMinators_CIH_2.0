
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import Government from "../models/gov.js";
import Issue from "../models/Issue.js";
import Citizen from "../models/citizen.js";



export const addComplaint = async(req, res) => {
  console.log("👉 Incoming Complaint Body:", req.body);
console.log("👉 Received File:", req.file);
console.log("👉 User from token:", req.user);

  try {
    if (req.user.role !== 'citizen') {
      return res.status(403).json({ success: false, message: "Only citizens can perform this action" });
    }

    const { title, description, category, city,lat,lng } = req.body;
    // const coordinates = JSON.parse(req.body.coordinates); // ✅ Parse JSON
    const citizenId = req.headers["id"];

    if (!title || !description || !category || !citizenId || !city) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const citizenUser = await Citizen.findById(citizenId);
    if (!citizenUser) {
      return res.status(400).json({ success: false, message: "Invalid citizen user" });
    }

    const existingTitle = await Issue.findOne({ title });
    if (existingTitle) {
      return res.status(400).json({ message: "Title already exists." });
    }

    // const imagePath = req.file ? req.file.path : null;

    const newIssue = await Issue.create({
      title,
      description,
      category,
      // image: imagePath,
      // coordinates,
      citizen: citizenId,
      city,
       coordinates: {
      type: "Point",
      coordinates: [parseFloat(lng), parseFloat(lat)]
  }
    });

    await Citizen.findByIdAndUpdate(
      citizenId,
      { $push: { issuesAdded: newIssue._id } },
      { new: true }
    );

    res.status(201).json({ success: true, message: "Complaint registered", issue: newIssue });
  } catch (err) {
    console.log("🔥 Add complaint error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const upVoteIssues = async (req, res) => {
        try{
            if (req.user.role !== 'citizen') {
                return res.status(403).json({ success: false, message: "Only citizens can perform this action" });
                }
            const {issueId} = req.body;
            const citizenId = req.user.userId;


            if (!issueId) {
                return res.status(400).json({ success: false, message: "Issue ID is required" });
            }

            const issue = await Issue.findById(issueId);
            if (!issue) {
                return res.status(404).json({ success: false, message: "Issue not found" });
            }

            const citizen = await Citizen.findById(citizenId);
            if (!citizen) {
                return res.status(404).json({ success: false, message: "Citizen not found" });
            }

            // Check if the citizen has already upvoted this issue
            if (citizen.upvotedIssues.includes(issueId)) {
                return res.status(400).json({ success: false, message: "You have already upvoted this issue" });
            }

            // Add the issue to the citizen's upvotedIssues array
            citizen.upvotedIssues.push(issueId);
            await citizen.save();

            // Increment the upvote count for the issue
            issue.upvotes = (issue.upvotes || 0) + 1;
            await issue.save();

            res.status(200).json({ success: true, message: "Issue upvoted successfully", issue });

        }catch(err){
            console.log("Upvote issue error: ", err);
            res.status(500).json({message: "Internal server error"});
        }
}


export const signupCitizen = async (req, res) => {
  try {
    const { fullname, number, password } = req.body;
    if (!fullname || !number || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (!validator.isMobilePhone(number.toString(), "en-IN")) {
      return res.status(400).json({ message: "Invalid mobile number" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({ message: "Weak password" });
    }

    const userExist = await Citizen.findOne({ number });
    if (userExist) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Citizen.create({ fullname, number, password: hashedPassword });

    const token = jwt.sign(
      { userId: user._id, role: "citizen" },
      process.env.JWT_PASSWORD,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    res.status(201).json({ success: true, user: { id: user._id, fullname, number, role: "citizen", token } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signinCitizen = async (req, res) => {
  try {
    const { number, password } = req.body;
    const user = await Citizen.findOne({ number });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, role: "citizen" },
      process.env.JWT_PASSWORD,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    res.json({ success: true, user: { id: user._id, fullname: user.fullname, number: user.number, role: "citizen", token } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const signupGov = async (req, res) => {
    const { fullname, number, password, department, city ,email} = req.body;
console.log(req.body);
  try {
    if (!fullname || !number || !password || !department || !city || !email) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const userExist = await Government.findOne({ number });
    if (userExist) return res.status(400).json({ message: "User already exists" });

    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Government.create({ fullname, number, password, department, city,email });

    const token = jwt.sign(
      { userId: user._id, role: "government" },
      process.env.JWT_PASSWORD,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    res.status(201).json({ success: true, user: { id: user._id, fullname, number, role: "government", token } });
  } catch (err) {
    console.log("Signup issue : " , err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signinGov = async (req, res) => {
  try {
    const { number, password } = req.body;
    const user = await Government.findOne({ number });
    if (!user) return res.status(400).json({ message: "1.Invalid credentials" });

    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = false;
    if(password === user.password){
      isMatch = true;
    }
    if (!isMatch) return res.status(400).json({ message: "2.Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, role: "government" },
      process.env.JWT_PASSWORD,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    res.json({ success: true, user: { id: user._id, fullname: user.fullname, number: user.number, role: "government", token } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

