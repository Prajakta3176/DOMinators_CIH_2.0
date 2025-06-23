import express from "express";
// import { addComplaint, signin, signup, upVoteIssues } from "../controllers/user.js";
// import upload from "../middleware/upload.js"; 
import authenticateToken from "../middleware/userAuthentication.js";
import upload from "../middleware/upload.js";
import { addComplaint, signinCitizen, signinGov, signupCitizen, signupGov, upVoteIssues } from "../controllers/user.js";
const userRouter = express.Router();

userRouter.post("/citizen/signup", signupCitizen);
userRouter.post("/citizen/signin", signinCitizen);
userRouter.post("/citizen/addComplaint", authenticateToken, upload.single("image"), addComplaint);
userRouter.patch("/citizen/upvoteIssue", authenticateToken, upVoteIssues);

//// -------- GOVERNMENT ROUTES ----------
userRouter.post("/government/signup", signupGov);
userRouter.post("/government/signin", signinGov);


export default userRouter;