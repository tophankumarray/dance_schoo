import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/service/AxosInstance";

const Signup = () => {
  let navigate = useNavigate();

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
      let finalData = await axiosInstance.post("/users/save", payload);
      console.log(finalData);
      alert(`Successfully Registered with email ${email} as user`);
      navigate("/login");
    } catch {
      console.log("Unable to Connect To Server");
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
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
        <label htmlFor="">Gender</label>
        <br />
        <input type="radio" name="gender" id="male" value="Male" onChange={handleData} />
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
        <div>
          <a href="/login">Already have an account ? Login</a>
        </div>
      </form>
    </>
  );
};

export default Signup;
