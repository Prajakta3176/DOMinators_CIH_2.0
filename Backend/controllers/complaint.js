import Citizen from "../models/citizen.js";
import Government from "../models/gov.js";
import Issue from "../models/Issue.js";



export const getAllComplaints = async(req,res)=>{
    try{
        const data = await Issue.find({});
        res.status(200).json(data);
    }catch(err){
        console.log("Get all complaints error: ",err);
        res.status(500).json({message: "Internal server error."});
    }
}

export const getMyComplaints = async(req,res)=>{
    try{
        const id = req.headers["id"];
        const user = await Citizen.findById(id).populate({path : "issuesAdded", options : {sort : {createdAt : -1}}});
        if(!user){
            return res.status(400).json({success:false, message : "Error in finding user"});
        }
        // const data = await user.populate("issuesAdded");
        res.status(200).json(user.issuesAdded);
    }catch(err){
        console.log("Get all complaints error: ",err);
        res.status(500).json({message: "Internal server error."});
    }
}

export const getDepartmentComplaints = async (req, res) => {
  try {
    const govId = req.user.userId; // assuming token middleware se userId aa rha
    const govUser = await Government.findById(govId);

    if (!govUser || !govUser.department || !govUser.city) {
      return res.status(400).json({ success: false, message: "Invalid government user or missing department" });
    }

    const issues = await Issue.find({
      category: "Drainage",
      city:  "Nagpur",
    }).populate("citizen", "fullname number") // Populate citizen details
      .sort({ createdAt: -1 }); // Sort by creation date, most recent first

    res.status(200).json({
      success: true,
      // message: `Complaints for ${govUser.department} in ${govUser.city}`,
      data: issues,
    });
  } catch (err) {
    console.log("Error fetching department complaints:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const changeComplaintStatus = async(req,res)=>{
  try{
    if (req.user.role !== 'government') {
    return res.status(403).json({ success: false, message: "Only government users can perform this action" });
  }
    const {id, status} = req.body; // Assuming id and status are sent in the request body
    if(!id || !status){
      return res.status(400).json({message: "Complaint ID and status are required."});
    }

    const validStatuses = ["Pending", "In Progress", "Resolved"];
    if(!validStatuses.includes(status)){
      return res.status(400).json({message: "Invalid status provided."});
    }

    const updatedIssue = await Issue.findByIdAndUpdate(id, {status}, {new: true});
    if(!updatedIssue){
      return res.status(404).json({message: "Complaint not found."});
    }

    res.status(200).json({message: "Status updated successfully.", issue: updatedIssue});

  }catch(err){
    console.log("Error in changing status: ",err);
    res.status(500).json({message: "Internal server error."});
  }
}

export const getIndividualComplaint = async(req,res)=>{
   try{
    const id = req.headers["id"];
    if(!id){
      return res.status(400).json({message: "Complaint ID is required."});
    }
    const complaint = await Issue.findById(id).populate("citizen", "fullname number");
    if(!complaint){
      return res.status(404).json({message: "Complaint not found."});
    }

    res.status(200).json(complaint);

   }catch(err){
    console.log("Get individual complaint error: ", err);
    res.status(500).json({message: "Internal server error."});
   }
}

export const getComplaintByStatus = async(req,res)=>{
  try{
    const status = req.params.status;
    if(!status){
      return res.status(400).json({message: "Status is required."});
    }

    const validStatuses = ["Pending", "In Progress", "Resolved"];
    if(!validStatuses.includes(status)){
      return res.status(400).json({message: "Invalid status provided."});
    }

    const complaints = await Issue.find({status}).populate("citizen", "fullname number").sort({createdAt: -1});
    res.status(200).json(complaints);

  }catch(err){
    console.log("Get complaint by status error: ", err);
    res.status(500).json({message: "Internal server error."});
  }
}


