import React, { useState } from "react";
import "../AcademyManager/managerregister.css"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/service/AxosInstance";
import { toast } from "react-toastify";

const AddAcademyMannager = () => {
  let navigate = useNavigate();
  let token=window.localStorage.getItem("token")

  let [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
  });

  let { userName, email, password, phone, gender, dob } = data;

  let handleData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      let payload = {
        userName,
        email,
        password,
        phone,
        gender,
        dob,
      };
      let finalData = await axiosInstance.post("/academymanagers/save", payload,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      console.log(finalData);
      alert(`${email} academy manager registered successfully`);
      navigate("/admindashboard/viewAcademyManage");
    } catch (error) {
      toast.error(error.code);
    }
    setData({
      userName: "",
      email: "",
      password: "",
      phone: "",
      gender: "",
      dob: "",
    });
  };
  return (
    <>
      <form action="" className="text" onSubmit={handleSubmit}>
        <h2>Academy Manager Register</h2>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="userName"
          id="Name"
          placeholder="name"
          value={userName}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="">Phone no</label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="phone"
          value={phone}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="gender">Gender</label>
        <br />
        <input
          type="radio"
          name="gender"
          id="male"
          value="Male"
          onChange={handleData}
        />
        <label htmlFor="male">male</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="Female"
          onChange={handleData}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <label htmlFor="dob">Birthday</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={handleData}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
    </>
  );
};

export default AddAcademyMannager;
