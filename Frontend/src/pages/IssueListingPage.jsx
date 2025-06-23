import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import IssueBox from '../components/IssueBox';

const IssueListingPage = () => {
    const role = localStorage.getItem("role");
    const [issueData, setIssueData] = useState([]);

        const headers = {
      id : localStorage.getItem("id"),
      authorization : `Bearer ${localStorage.getItem("token")}`
  }

    const handleVote = async(id)=>{
          try{
            const res = await  axios.patch('http://localhost:8080/api/user/citizen/upvoteIssue',{
            issueId : id
            },{headers});
            alert(res.data);
            console.log(res.data);  
          }catch(err){
            console.log(err);
            alert(err?.response?.data?.message)
          }
  }  


    const fetch = async()=>{
        const res1 = await  axios.get('http://localhost:8080/api/complaint/get-all-complaints');
        // const res2 = await  axios.get('http://localhost:8080/api/complaint/get-department-complaints');
            setIssueData(res1.data);    
    }

    useEffect(()=>{
            fetch();
    },[])



  return (
    <div className='mih-h-screen pt-28 bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] flex flex-col justify-center items-center gap-6 mt-4'>
        <h1 className='text-3xl font-bold text-[#1d506c]'>Complaints from all over world</h1>
        <div className='flex flex-wrap items-center justify-center w-[80vw]'>
            {
                issueData.length > 0 ? (
                    issueData.map((issue)=>(
                       <IssueBox data={issue} handleVote={handleVote}/>

                    ))
                ) : "No list"
            }
        </div>
    </div>
  )
}

export default IssueListingPage