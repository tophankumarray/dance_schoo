import React, { useState , useEffect } from 'react'
import"../AcademyManager/details.css"
import { Link, useParams } from "react-router-dom";
import axiosInstance from '../../services/service/AxosInstance';
import { faker } from "@faker-js/faker";



const AcademicManagerDeatils = () => {
  let token = window.localStorage.getItem("token");

  let [userdata, setUserdata] = useState("");

  let {id}=useParams()

  let [fake, setFake] = useState(faker.image.avatar());

  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let fetchData = data.data;
        setUserdata(fetchData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let handleDelete=async(id)=>{
    await axiosInstance.delete(`/academymanagers/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    window.location.assign("/admindashboard/viewAcademyManager");
    alert("successfully data deleted")
  }
  return (
    <div className="detail">
      <h2>Academic Manager Deatils</h2>
      <img src={fake} alt="" className="img" />
      <div>
        Name : <b>{userdata.userName}</b>
        <div>
          Email: <b>{userdata.email}</b>
        </div>
        <div>
          Phone no: <b>{userdata.phone}</b>
        </div>
        <div>
          Gender: <b>{userdata.gender}</b>
        </div>
        <div>
          DOB: <b>{userdata.dob}</b>
        </div>
        <div className="btn">
          <button>
            <Link to={`/admindashboard/academicdetailsupdate/${userdata.id}`}>
              EDIT
            </Link>
          </button>
          <button>
            <Link to={`/admindashboard/addacademy/${userdata.id}`}>ADD ACADEMY</Link>
          </button>
          <button onClick={()=>{
            handleDelete(userdata.id)
          }}>DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default AcademicManagerDeatils