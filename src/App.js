// src/App.js

import React from 'react';
import './App.css'; // Custom styles
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidenavbar from './Components/Sidenavbar';
import Dashboard from './Components/Dashboard';
import AppReg from './Components/AppReg';
import EligibilityDetermination from './Components/EligibilityDetermination';
import Correspondense from './Components/Correspondence';
import Benefit from './Components/BenefitAssurance';
import Reports from './Components/Reports';
import Children from './Components/DcModule/Children';
import Education from './Components/DcModule/Education';
import Income from './Components/DcModule/Income';
import SaveCaseWorkers from './Components/Admin/SaveCaseWorkers';
import SavePlans from './Components/Admin/SavePlans';
import LogOut from './Components/LogOut';
import Login from './Components/Login';
import CaseNumber from './Components/DcModule/CaseNumber';
import Error from './Components/Error';
import Summary from './Components/DcModule/Summary';
import EditPlans from './Components/Admin/EditPlans';
import EditCaseWorkers from './Components/Admin/EditCaseWorkers';
import ModifyUser from './Components/Admin/ModifyUser';
import ModifyPlan from './Components/Admin/ModifyPlan';
import Logout from './Components/LogOut';

function App() {
    // Check for token in local storage to determine if user is logged in
    // const isAuthenticated = localStorage.getItem('jwtToken') !== null;

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container-fluid row ms-0">
                <div className="col-2 p-0">
                    <Sidenavbar />
                </div>
                <div className="col-10 p-0">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/appReg" element={<AppReg />} />
                        <Route path="/elgiDet" element={<EligibilityDetermination />} />
                        <Route path="/corres" element={<Correspondense />} />
                        <Route path="/benefit" element={<Benefit />} />
                        <Route path="/reports" element={<Reports />} />
                        {/* Data Collection Sub Module */}
                        <Route path="/dataCollection/child" element={<Children />} />
                        <Route path="/dataCollection/education" element={<Education />} />
                        <Route path="/dataCollection/income" element={<Income />} />
                        <Route path="/dataCollection/caseNo" element={<CaseNumber />} />
                        <Route path="/dataCollection/summary" element={<Summary />} />
                        {/* Admin Sub Module */}
                        <Route path="/admin/saveCw" element={<SaveCaseWorkers />} />
                        <Route path="/admin/savePlan" element={<SavePlans />} />
                        <Route path="/admin/editPlan" element={<EditPlans />} />
                        <Route path="/admin/editCw" element={<EditCaseWorkers />} />
                        <Route path="/user/:id" element={<ModifyUser />} />
                        <Route path="/plan/:id" element={<ModifyPlan />} />
                        {/* Error Route */}
                        <Route path="*" element={<Error />} />

                        <Route path="/logout" element={<LogOut />} />
                        <Route path="/signin" element={<Login />} />


                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
