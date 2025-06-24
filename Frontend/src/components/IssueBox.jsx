import React from 'react'
import { ArrowBigUp } from "lucide-react";
import axios from 'axios';

const IssueBox = ({data, handleVote}) => {


  const {title, category,status, description, city, _id,upvotes} = data;
const role = localStorage.getItem("role"); 

const handleChangeStatus = async (complaintId, newStatus) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.patch(
      "http://localhost:8080/api/user/complaint/change-complaint-status",
      {
        id: complaintId,
        status: newStatus // 👈 Must match one of the valid ones
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Status updated!");
    window.location.reload();
  } catch (err) {
    console.error(err);
    alert(err?.response?.data?.message || "Failed to update status");
  }
};

    const trimText = (text, maxLength = 50) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
  return (
     <div className="bg-white bg-opacity-80 rounded-2xl shadow-md p-4 m-2 w-full max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-blue-700">{category}</span>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            status === "Resolved"
              ? "bg-green-100 text-green-700"
              : status === "Pending" ?  "bg-red-200 text-red-500": "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
      </div>

      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-700 mt-1">{trimText(description)}</p>

      <div className="text-xs text-gray-500 mt-3 flex justify-between">
        <div>📍 {city}</div>
        <button className='cursor-pointer' onClick={()=>handleVote(_id)}>
          <ArrowBigUp/> {upvotes}
        </button>
      </div>
      {
  role === "government" && (
    <div className="mt-3">
      <button
        onClick={() => handleChangeStatus(_id)}
        className='text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700'
      >
        Update Status
      </button>
    </div>
  )
}
    </div>
  )
}

export default IssueBox