import React, { useState } from 'react'
import "./sign.css"
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/service/AxosInstance';
import { toast } from "react-toastify";


const Signin = () => {
    let navigate = useNavigate();

    let [state, setState] = useState({
      userEmail: "",
      password: "",
    });

     let { userEmail, password } = state;

     let handleChange = (e) => {
       // let {name,value}=e.target;
       let name = e.target.name;
       let value = e.target.value;
       setState({ ...state, [name]: value });
     };

     let handleSubmit = async (e) => {
       e.preventDefault();
       console.log(state);

       try {
         let payload = { userEmail, password };

         let { data } = await axiosInstance.post("/authenticate", payload);
         let token = data.token;
         let role = data.role;
         console.log(token);
         if (token) {
           localStorage.setItem("token", token);
           localStorage.setItem("role", role);
           if (role === "ROLE_ADMIN") {
             toast.success(`successfully logged in with email ${userEmail} as admin`,{position:toast.POSITION.TOP_CENTER});
             navigate("/");
           } else {
             alert(
               `successfully logged in with the email ${userEmail} as user`
             );
             navigate("/");
           }
         } else {
           localStorage.removeItem("token", token);
           localStorage.removeItem("role", role);
         }
       } catch {
         toast.error("invalid password or username", {
           position: toast.POSITION.TOP_CENTER,
         });
         console.log("unable to connect");
       }
     };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="Email">Email</label>
        <input type="email" name="userEmail" id="userEmail" value={userEmail}  onChange={handleChange}/> <br />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"  value={password} onChange={handleChange}/>
        <br />
        <br />
        <button type="submit">Login</button>
        <div>
          <a href="/register">Don't have an account ? SignUp</a>
        </div>
      </form>
    </>
  );
}

export default Signin