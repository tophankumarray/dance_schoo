import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../services/service/AxosInstance";

const EditAcademy = () => {
  let [editacademy, setEditacademy] = useState({
    academyName: "",
    description: "",
    email: "",
    contact: "",
  });
  let { academyName, description, email, contact } = editacademy;
  let token = window.localStorage.getItem("token");
  let { id } = useParams();
  let navigate = useNavigate();

  let handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let payload = { academyName, description, email, contact };
      console.log(payload);
      await axiosInstance.put("/academies/update", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("update Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  let handleData = (e) => {
    // let { name, value } = e.target;
    let name = e.target.name;
    let value = e.target.value;
    setEditacademy({ ...EditAcademy, [name]: value });
  };

  useEffect(() => {
    let fetch = async () => {
      let { data } = await axiosInstance.get(`/academies/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let fetchedData = data.data;
      setEditacademy(fetchedData);
    };
    fetch();
  }, [id]);
  return (
    <>
      <div>
        <h2>UPDATE ACADEMY</h2>
        <div>
          <label htmlFor="academyName">ACADEMY NAME: </label>
          <input
            type="text"
            placeholder="Enter Name"
            name="academyName"
            id="academyName"
            value={editacademy.academyName}
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
            value={editacademy.description}
            onChange={handleData}
          />
          <br />
          <br />
          <label htmlFor="email">EMAIL: </label>
          <input
            type="email"
            placeholder="Enter email id"
            name="email"
            id="email"
            value={editacademy.email}
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
            value={editacademy.contact}
            onChange={handleData}
          />
          <button type="submit" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default EditAcademy;
