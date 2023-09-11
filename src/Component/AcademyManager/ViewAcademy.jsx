import React, { useEffect,useState } from 'react'
import "../AcademyManager/viewacademy.css"
import axiosInstance from '../../services/service/AxosInstance'
import { useNavigate } from 'react-router-dom'
// import { tr } from '@faker-js/faker'

const ViewAcademy = () => {

  let token=window.localStorage.getItem("token")

  let [academy,setAcademy]=useState([])
  let navigate=useNavigate()

  let handleDelete=async (id)=>{
     await axiosInstance.delete(`/academies/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    window.location.assign("/admindashboard/viewAcademy");
    alert("successfully data deleted")
  }

  useEffect(()=>{
    let fetchData=async ()=>{
      try {
        let { data } = await axiosInstance.get("/academies/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
         let finalData = data.data;
         setAcademy(finalData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
  return (
    <>
      <div>
        <h2>List Of Academy</h2>
        <table>
          <tr>
            <th>SL No.</th>
            <th>ACADEMY NAME</th>
            <th>DESCRIPTION</th>
            <th>EMAIL</th>
            <th>CONTACT NUMBER</th>
            <th>EDIT</th>
            <th>ADD BRANCH</th>
            <th>Delete</th>
          </tr>
         {academy.map((x,i)=>{
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{x.academyName}</td>
              <td>{x.description}</td>
              <td>{x.email}</td>
              <td>{x.contact}</td>
              <td>
                <button type='submit' onClick={(e)=>{
                  e.preventDefault()
                  navigate(`/admindashboard/editacademy/${x.id}`);
                }}>EDIT</button>
              </td>
              <td>
                <button type='submit' onClick={(e)=>{
                  e.preventDefault();
                  navigate(`/admindashboard/addbranch/${x.id}`);
                }}>ADD</button>
              </td>
              <td>
                <button type='submit' onClick={()=>{
                  handleDelete(x.id)
                }}>Delete</button>
              </td>
            </tr>
          );
         })

         }
        </table>
      </div>
    </>
  );
}

export default ViewAcademy