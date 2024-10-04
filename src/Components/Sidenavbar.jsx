import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/SideBar.css';

function Sidenavbar() {
  const [isDataCollectionOpen, setDataCollectionOpen] = useState(false);
  const [isAdminOpen, setAdminOpen] = useState(false);

  const toggleDataCollection = () => setDataCollectionOpen(!isDataCollectionOpen);
  const toggleAdmin = () => setAdminOpen(!isAdminOpen);

  return (
    <div
      className="d-flex flex-column vh-100 p-2 border-end"
    >
      <nav className="nav nav-pills flex-column mb-auto">
        <NavLink
          to="/"
          className="nav-link d-flex align-items-center mb-2 text-dark p-2 rounded"
          activeclassname="active bg-primary text-white"
          
        >
          <h4 className="bi bi-speedometer2 me-3"></h4>
          <h6>Dashboard</h6>
        </NavLink>

         {/* Application Registration */}
         <NavLink
          to="/appReg"
          className="nav-link d-flex align-items-center mb-2 text-dark p-2 rounded"
          activeclassname="active bg-primary text-white"
          
        >
          <h4 className="bi bi-person-add me-3"></h4>
          <h6>Application Registration</h6>
        </NavLink>

        {/* Data Collection with expandable sub-menu */}
        <div className="nav-item">
          <div
            className="nav-link d-flex align-items-center text-dark p-2 rounded cursor-pointer"
            onClick={toggleDataCollection}
          >
            <h4 className="bi bi-collection me-3"></h4>
            <h6>Data Collection</h6>
            <h4 className={`bi ms-auto ${isDataCollectionOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></h4>
          </div>
          {isDataCollectionOpen && (
            <div className="ms-4">
              <NavLink to="/dataCollection/caseNo" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>CaseNo Generation</p></NavLink>
              <NavLink to="/dataCollection/child" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Child</p></NavLink>
              <NavLink to="/dataCollection/income" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Income</p></NavLink>
              <NavLink to="/dataCollection/education" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Education</p></NavLink>
              <NavLink to="/dataCollection/summary" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Summary</p></NavLink>
            </div>
          )}
        </div>

        {/* Eligibility Determination */}
        <NavLink
          to="/elgiDet"
          className="nav-link d-flex align-items-center mb-2 text-dark p-2 rounded"
          activeclassname="active bg-primary text-white"
          
        >
          <h4 className="bi bi-check-circle me-3"></h4>
          <h6>Eligibility Determination</h6>
        </NavLink>


         {/* Correspondence Module */}
         <NavLink
          to="/corres"
          className="nav-link d-flex align-items-center mb-2 text-dark p-2 rounded"
          activeclassname="active bg-primary text-white"
          
        >
          <h4 className="bi bi-info me-3"></h4>
          <h6>Correspondence</h6>
        </NavLink>


        {/* Additional Links */}
        <NavLink
          to="/benefit"
          className="nav-link d-flex align-items-center mb-2 text-dark p-2 rounded"
          activeclassname="active bg-primary text-white"
          
        >
          <h4 className="bi bi-cash-stack me-3"></h4>
          <h6>Benefit Issuance</h6>
        </NavLink>

        <NavLink
          to="/reports"
          className="nav-link d-flex align-items-center mb-2 text-dark p-2 rounded"
          activeclassname="active bg-primary text-white"
          
        >
          <h4 className="bi bi-bar-chart-line me-3"></h4>
          <h6>Reports</h6>
        </NavLink>


        
      {/* Admin with expandable sub-menu */}
      <div className="nav-item">
          <div
            className="nav-link d-flex align-items-center text-dark p-2 rounded cursor-pointer"
            onClick={toggleAdmin}
          >
            <h4 className="bi bi-gear me-3"></h4>
            <h6>Admin</h6>
            <h4 className={`bi ms-auto ${isAdminOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></h4>
          </div>
          {isAdminOpen && (
            <div className="ms-4">
              <NavLink to="/admin/saveCw" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Add Users</p></NavLink>
              <NavLink to="/admin/savePlan" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Add Plan</p></NavLink>
              <NavLink to="/admin/editCw" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Edit Users</p></NavLink>
              <NavLink to="/admin/editPlan" className="nav-link text-dark p-1 ms-2"><p className=' fw-medium'>Edit Plan</p></NavLink>
            </div>
          )}
        </div>
      </nav>

      <div className="mt-auto">
        <NavLink
          to="/logout"
          className="nav-link d-flex align-items-center text-dark p-2 rounded"
        >
          <h4 className="bi-box-arrow-right me-3" style={{ fontSize: '1.2rem' }}></h4>
          <h6 className="ms-1">Logout</h6>
        </NavLink>
        <NavLink
          to="/signin"
          className="nav-link d-flex align-items-center text-dark p-2 rounded"
        >
          <h4 className="bi-box-arrow-right me-3" style={{ fontSize: '1.2rem' }}></h4>
          <h6 className="ms-1">Login</h6>
        </NavLink>
      </div>

    </div>
  );
}

export default Sidenavbar;
