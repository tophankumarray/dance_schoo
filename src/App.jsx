import React from 'react'
import Signin from './Component/Login/Signin'
import Signup from './Component/Login/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRegister from './Component/Admins/AdminRegister';
import AdminDashboard from './Component/Admins/AdminDashboard';
import PublicRouter from './Component/ServicesRoutes/PublicRouter';
import Navbar from './Component/Navbar/Navbar';
import AddAcademyMannager from './Component/AcademyManager/AddAcademyMannager';
import ViewAcademyManager from './Component/AcademyManager/ViewAcademyManager';
import ViewAcademy from './Component/AcademyManager/ViewAcademy';
import ViewBranch from './Component/AcademyManager/ViewBranch';
import ViewCourse from './Component/AcademyManager/ViewCourse';
import AcademicManagerDeatils from './Component/AcademyManager/AcademicManagerDeatils';
import AcademyManagerUpdate from './Component/AcademyManager/AcademyManagerUpdate';
import AddAcademy from './Component/AcademyManager/AddAcademy';
import EditAcademy from './Component/AcademyManager/EditAcademy';
import AddBranch from './Component/AcademyManager/AddBranch';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Signin />
              </PublicRouter>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRouter>
                <Signup />
              </PublicRouter>
            }
          />
          <Route path="/adminregister" element={<AdminRegister />} />
          <Route path="/admindashboard" element={<AdminDashboard />}>
            <Route
              path="/admindashboard/addAcademyManager"
              element={<AddAcademyMannager />}
            />
            <Route
              path="/admindashboard/viewAcademyManager"
              element={<ViewAcademyManager />}
            />
            <Route
              path="/admindashboard/viewAcademy"
              element={<ViewAcademy />}
            />
            <Route path="/admindashboard/viewBranch" element={<ViewBranch />} />
            <Route path="/admindashboard/viewCourse" element={<ViewCourse />} />
            <Route
              path="/admindashboard/academicdetails/:id"
              element={<AcademicManagerDeatils />}
            />
            <Route
              path="/admindashboard/academicdetailsupdate/:id"
              element={<AcademyManagerUpdate />}
            />
            <Route
              path="/admindashboard/addacademy/:id"
              element={<AddAcademy />}
            />
            <Route
              path="/admindashboard/editacademy/:id"
              element={<EditAcademy />}
            />
            <Route
              path="/admindashboard/addbranch/:id"
              element={<AddBranch />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App