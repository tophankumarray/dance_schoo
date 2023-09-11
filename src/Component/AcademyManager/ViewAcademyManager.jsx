import React, { useEffect, useState } from 'react'
import "../AcademyManager/view.css"
import axiosInstance from '../../services/service/AxosInstance'
import { faker } from "@faker-js/faker";
import { Link } from "react-router-dom";

const ViewAcademyManager = () => {
  let token=window.localStorage.getItem("token")

  let[userdata,setUserdata]=useState([])

  let[fake,setFake]=useState(faker.image.avatar())

  useEffect(()=>{
    let fetchData=async ()=>{
      try {
        let {data}=await axiosInstance.get("/academymanagers/getall",{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        let fetchData=data.data
        setUserdata(fetchData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
  return (
   <div>
     <h2>View Academy Manager</h2>
    {userdata.map((x)=>{
      return (
        <>
          <div className="card">
            <div>
              <img src={fake} alt="" className="img" />
            </div>
            <div>
              Name: <b>{x.userName}</b>
            </div>
            <div>
              Email: <b> {x.email}</b>
            </div>
            <div>
              Phone no: <b>{x.phone}</b>
            </div>
            <div>
              Gender: <b>{x.gender}</b>
            </div>
            <div>
              DOB: <b>{x.dob}</b>
            </div>
            <button>
              <Link to={`/admindashboard/academicdetails/${x.id}`}>View</Link>
            </button>
          </div>
        </>
      );
    })
    }
   </div>
  );
}

export default ViewAcademyManager