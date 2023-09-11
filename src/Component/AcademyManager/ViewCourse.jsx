import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";
import axiosInstance from "../../services/service/AxosInstance";



const ViewCourse = () => {
  let token = window.localStorage.getItem("token");
  let [fake, setFake] = useState(faker.image.avatar());
  let[course,setCourse]=useState([])

  useEffect(() => {
    let fetchData = async () => {
      try {
        let { data } = await axiosInstance.get("", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let fetchData = data.data;
        setCourse(fetchData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <>
      <div>
        <h2>View Course</h2>
       {course.map((x)=>{
        return (
          <>
            <div className="card">
              <div>
                <img src={fake} alt="" className="img" />
              </div>
              <div>
                Course Name: <b></b>
              </div>
              <div>
                Course Duration: <b></b>
              </div>
              <div>
                Fees: <b></b>
              </div>
              <button>
                <Link to="">Delete</Link>
              </button>
            </div>
          </>
        );
       })

       }
      </div>
    </>
  );
}

export default ViewCourse