import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CO_TRIGGERS } from './Helper/Constant';

const CorrespondenceDashboard = () => {
  const [correspondenceData, setCorrespondenceData] = useState({
    totalTriggers: 0,
    pendingTriggers: 0,
    successTriggers: 0,
    failedTriggers: 0,
    avgProcessingTime: 'N/A',
  });



  function handleTriggers(){
    // Fetch data from the API
    axios.get(CO_TRIGGERS) // Replace with your actual API endpoint
      .then((response) => {
        setCorrespondenceData(response.data);
        console.log(response.data);
        
      })
      .catch((error) => {
        console.error('Error fetching correspondence data:', error);
      });
  }

  const { totalTriggers, pendingTriggers, successTriggers, failedTriggers, avgProcessingTime } = correspondenceData;

  return (
    <div className="container-fluid bg-light py-4" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="shadow-sm p-3 text-center bg-white w-100">
          <h3>Correspondence Processing Dashboard</h3>
        </div>
      </div>

      <div className=' d-flex justify-content-center mb-3'><button onClick={handleTriggers}>Triggers Data</button></div>

      {/* Correspondence Overview Section */}
      <div className="row justify-content-around mb-4">
        <div className="col-md-5 mb-3">
          <div className="card text-center shadow-sm border-info">
            <div className="card-header bg-info text-white">Total Correspondence</div>
            <div className="card-body">
              <div className="display-4 mb-2">📄</div>
              <h5 className="card-title">All PDFs Processed</h5>
              <p className="card-text fs-4">{totalTriggers}</p>
              <p className="text-muted">Total correspondence PDFs handled by the system.</p>
            </div>
          </div>
        </div>

        <div className="col-md-5 mb-3">
          <div className="card text-center shadow-sm border-warning">
            <div className="card-header bg-warning text-white">Pending Correspondence</div>
            <div className="card-body">
              <div className="display-4 mb-2">⌛</div>
              <h5 className="card-title">Pending PDFs</h5>
              <p className="card-text fs-4">{pendingTriggers}</p>
              <p className="text-muted">Number of correspondence PDFs yet to be processed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success and Failed Correspondence */}
      <div className="row justify-content-around mb-4">
        <div className="col-md-5 mb-3">
          <div className="card text-center shadow-sm border-success">
            <div className="card-header bg-success text-white">Successful Correspondence</div>
            <div className="card-body">
              <div className="display-4 mb-2">✅</div>
              <h5 className="card-title">Emails Sent</h5>
              <p className="card-text fs-4">{successTriggers}</p>
              <p className="text-muted">Successfully emailed correspondence with PDF attachments.</p>
            </div>
          </div>
        </div>

        <div className="col-md-5 mb-3">
          <div className="card text-center shadow-sm border-danger">
            <div className="card-header bg-danger text-white">Failed Correspondence</div>
            <div className="card-body">
              <div className="display-4 mb-2">❌</div>
              <h5 className="card-title">Failed Attempts</h5>
              <p className="card-text fs-4">{failedTriggers}</p>
              <p className="text-muted">Correspondence that could not be sent due to errors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Average Processing Time */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center shadow-sm border-dark">
            <div className="card-header bg-dark text-white">Average Processing Time</div>
            <div className="card-body">
              <div className="display-4 mb-2">⏱️</div>
              <h5 className="card-title">Processing Speed</h5>
              <p className="card-text fs-4">{avgProcessingTime}</p>
              <p className="text-muted">Average time taken to process and send correspondence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorrespondenceDashboard;
