import React from 'react'
import { Link } from 'react-router-dom'
import "../AcademyManager/academy.css"

const AcademyManagerSideBar = () => {
  return (
    <>
      <div className='academy'>
        <ul>
          <h2>Admin DashBoard</h2>
          <li>
            <Link to="/admindashboard/addAcademyManager">
              Add Academy Manager
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/viewAcademyManager">
              View Academy Manager
            </Link>
          </li>
          <li>
            <Link to="/admindashboard/viewAcademy">View Academy</Link>
          </li>
          <li>
            <Link to="/admindashboard/viewBranch">View Branch</Link>
          </li>
          <li>
            <Link to="/admindashboard/viewCourse">View Course</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AcademyManagerSideBar