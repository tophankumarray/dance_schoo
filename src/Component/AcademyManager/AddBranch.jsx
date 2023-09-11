import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../services/service/AxosInstance";


const AddBranch = () => {
    let token=window.localStorage.getItem("token")
    let navigate = useNavigate();
    let { id } = useParams();
    let [state,setState]=useState({
        branchaddress:"",
        branchid:"",
        branchcity:"",
        branchnumber:"",
        branchpincode:""
    })
      let { branchaddress, branchid, branchcity, branchnumber, branchpincode } = state;
      let handleData = (e) => {
        // let name=e.target.name
        // let value=e.target.value
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(state);
      };

      let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(state);
        try {
          let payload = {
            branchaddress,
            branchid,
            branchcity,
            branchnumber,
            branchpincode,
          };
          let finalData = await axiosInstance.post(
            `/branches/save?branch=${id}`,
            payload,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(finalData);
          alert(`successfully registered with as Branch`);
          navigate("/admindashboard");
        } catch (error) {
          console.log("unable to connect server");
        }
        setState({
          branchaddress: "",
          branchid: "",
          branchcity: "",
          branchnumber: "",
          branchpincode: "",
        });
      };

  return (
    <>
      <div>
        <h2>Add Branches</h2>
        <div>
          <label htmlFor="branchaddress">BRANCH ADDRESS: </label>
          <input
            type="text"
            placeholder="Enter Address"
            name="branchaddress"
            id="branchaddress"
            value={branchaddress}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="branchid">BRANCH ID: </label>
          <input
            type="text"
            placeholder="Enter Desc"
            name="branchid"
            id="branchid"
            value={branchid}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="branchcity">BRANCH CITY: </label>
          <input
            type="text"
            placeholder="Enter email id"
            name="branchcity"
            id="branchcity"
            value={branchcity}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="branchnumber">BRANCH PHONE NO: </label>
          <input
            type="text"
            placeholder="Enter Number"
            name="branchnumber"
            id="branchnumber"
            value={branchnumber}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="branchpincode">BRANCH PINCODE</label>
          <input
            type="text"
            placeholder="Enter Number"
            name="branchpincode"
            id="branchpincode"
            value={branchpincode}
            onChange={handleData}
          />
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default AddBranch