import express from "express";
import { changeComplaintStatus, getAllComplaints, getComplaintByCity, getComplaintByStatus, getDepartmentComplaints, getIndividualComplaint, getMyComplaints } from "../controllers/complaint.js";
import authenticateToken from "../middleware/userAuthentication.js";

const complaintRouter = express.Router();

complaintRouter
.get('/get-all-complaints',getAllComplaints)
.get('/get-my-complaints',authenticateToken,getMyComplaints)
.get('/get-department-complaints',getDepartmentComplaints)
.patch('/change-complaint-status',authenticateToken,changeComplaintStatus)
.get('/get-individual-complaint', getIndividualComplaint)
.get('/get-complaint-by-status/:status',  getComplaintByStatus)
.get('/get-complaint-from-city/:city',authenticateToken,  getComplaintByCity)

// .get('/get-map-coordinates', getMapCoordinates);
export default complaintRouter;