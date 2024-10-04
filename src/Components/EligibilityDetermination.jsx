import React, { useState } from "react";
import "../Styles/Elgi.css"; // Assuming you have styles for the component
import axios from "axios";
import { ELGI_DETERMINATION } from "./Helper/Constant";

const EligibilityDetermination = () => {
  const [caseNumber, setCaseNumber] = useState("");
  const [data, setData] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset messages and data
    setSuccessMessage("");
    setErrorMessage("");
    setData(null);

    axios({
      method: "get",
      url: `${ELGI_DETERMINATION}${caseNumber}`,
    })
      .then((res) => {
        setData(res.data); // Store the data
        setSuccessMessage("Eligibility details retrieved successfully.");
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        } else if (error.request) {
          setErrorMessage("No response received from the server.");
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
        console.log("Error:", error);
      });
  };

  return (
    <div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
        <div className="shadow-sm p-3 text-center bg-white w-100">
          <h5>Eligibility Determination Page</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center shadow bg-white p-4">
        <div className="w-50 p-3 bg-light shadow-sm rounded">
          <form onSubmit={handleSubmit}>
            <dl>
              {/* Form for Case Number Input */}
              <dt className="form-label d-flex justify-content-center">Case Number</dt>
              <dd className="d-flex justify-content-center">
                <input
                  className="text-center"
                  type="text"
                  id="caseNumber"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  placeholder="Case Number"
                  required
                />
              </dd>
            </dl>
            <div className="col-12">
              <div className="text-success text-center">{successMessage}</div>
              <div className="text-danger text-center">{errorMessage}</div>
              <dd className="d-flex justify-content-center">
                <button type="submit" className="btn btn-dark w-50 mt-3">
                  Submit
                </button>
              </dd>
            </div>
          </form>
        </div>
      </div>

      {/* Display Eligibility Summary */}
      {data && (
        <div className="d-flex justify-content-center align-content-center mt-3 shadow bg-white p-4" style={{ height: "400px" }}>
          <div>
            <div className="summary-section">
              <div className="section">
                <h3>Plan Information</h3>
                <p>
                  <strong>Plan Name:</strong> {data.planName}
                </p>
                <p>
                  <strong>Plan Status:</strong> {data.planStatus}
                </p>
                <p>
                  <strong>Benefit Amount:</strong> ${data.benfitAmount}
                </p>
                {data.denialReason && (
                  <p>
                    <strong>Denial Reason:</strong> {data.denialReason}
                  </p>
                )}
                <p>
                  <strong>Plan Start Date:</strong> {data.planStartDate}
                </p>
                <p>
                  <strong>Plan End Date:</strong> {data.planEndDate}
                </p>
              </div>

              <div className="section">
                <h3>Holder Information</h3>
                <p>
                  <strong>Holder Name:</strong> {data.holderName}
                </p>
                <p>
                  <strong>SSN:</strong> {data.holderSsn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityDetermination;
