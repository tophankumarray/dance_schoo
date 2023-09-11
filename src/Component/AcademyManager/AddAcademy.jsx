import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../services/service/AxosInstance";

const AddAcademy = () => {
  let token = window.localStorage.getItem("token");
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    academyName: "",
    email: "",
    contact: "",
    description: "",
  });

  let { academyName, email, contact, description } = state;
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
        academyName,
        email,
        description,
        contact,
      };
      let finalData = await axiosInstance.post(
        `/academies/saveacademy?managerId=${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(finalData);
      alert(`successfully registered with ${email} as Academy`);
      navigate("/admindashboard");
    } catch (error) {
      console.log("unable to connect server");
    }
    setState({
      academyName: "",
      email: "",
      contact: "",
      description: "",
    });
  };
  return (
    <>
      <div>
        <h2>ADD ACADEMY</h2>
        <div>
          <label htmlFor="academyName">ACADEMY NAME: </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="academyName"
            id="academyName"
            value={academyName}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="description">DESCRIPTION: </label>
          <input
            type="text"
            placeholder="Enter Desc"
            name="description"
            id="description"
            value={description}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="email">EMAIL: </label>
          <input
            type="text"
            placeholder="Enter email id"
            name="email"
            id="email"
            value={email}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="contact">CONTACT: </label>
          <input
            type="text"
            placeholder="Enter Number"
            name="contact"
            id="contact"
            value={contact}
            onChange={handleData}
          />
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAcademy;
