import React from 'react'
import AcademyManagerSideBar from '../AcademyManager/AcademyManagerSideBar'
import AcademyManagerMainBar from '../AcademyManager/AcademyManagerMainBar'
import "../Admins/admindash.css"

const AdminDashboard = () => {
  return (
    <div className='admin'>
      <AcademyManagerSideBar/>
      <AcademyManagerMainBar/>
    </div>
  )
}

export default AdminDashboard