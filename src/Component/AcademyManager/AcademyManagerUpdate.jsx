import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../services/service/AxosInstance";
import { toast } from "react-toastify";

const AcademyManagerUpdate = () => {
  let [manager, setManager] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    phone: "",
  });
  let { userName, email, password, dob, gender, phone } = manager;
  let token = window.localStorage.getItem("token");
  let { id } = useParams();
  let navigate = useNavigate();

  let handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let payload = { userName, email, password, dob, gender, phone, id };
      await axiosInstance.put("/academymanagers/update", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Update Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      // navigate("/admin/viewmanager")
    } catch (error) {
      console.log("unable to connect server");
    }
    setManager({
      userName: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      phone: "",
    });
  };

  let handleData = (e) => {
    let { name, value } = e.target;
    setManager({ ...manager, [name]: value });
  };

  useEffect(() => {
    let fetch = async () => {
      let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let fetchedData = data.data;
      setManager(fetchedData);
    };
    fetch();
  }, [id]);
  return (
    <>
      <form action="" className="text">
        <h2>Academy Manager Update</h2>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          name="userName"
          id="username"
          placeholder="name"
          value={userName}
          onChange={handleData}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Password</label>
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
        <label htmlFor="phone">Phone no</label>
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
        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </>
  );
};

export default AcademyManagerUpdate;
