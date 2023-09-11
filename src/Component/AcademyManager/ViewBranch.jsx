import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../services/service/AxosInstance'

const ViewBranch = () => {
  let token=window.localStorage.getItem("token")

  let[branch,setBranch]=useState([])
  let navigate=useNavigate()

  let handleDelete=async (id)=>{
    await axiosInstance.delete(``,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    window.location.assign("")
    alert("successfully data deleted")
  }

  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get("/academies/getall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let finalData = data.data;
        setBranch(finalData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h2>List Of Branch</h2>
        <table>
          <tr>
            <th>SL No.</th>
            <th>Branch Address</th>
            <th>Branch Id</th>
            <th>Branch City</th>
            <th>Branch Phone No.</th>
            <th>Branch Pincode</th>
            <th>EDIT</th>
            <th>ADD COURSE</th>
            <th>DELETE</th>
          </tr>
         {branch.map((x,i)=>{
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                <button type="submit" onClick={(e)=>{
                  e.preventDefault()
                  navigate(``)
                }}>EDIT</button>
              </td>
              <td>
                <button type="submit" onClick={(e)=>{
                  e.preventDefault()
                  navigate(``)
                }}>ADD</button>
              </td>
              <td>
                <button type="submit" onClick={()=>{
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

export default ViewBranch