import React, { useState } from "react";
import "./Summary.css"; // Assuming you have styles for the component
import { GET_SUMMARY_BY_CASE_NO } from "../Helper/Constant";
import axios from "axios";

const Summary = () => {
  const [caseNumber, setCaseNumber] = useState("");
  const [data, setData] = useState(null);
  const [successMessage,setSuccessMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const n=parseInt(e.target.value)
    axios({
      method:'get',
      url:`${GET_SUMMARY_BY_CASE_NO}${caseNumber}`,
    }).then(res=>{
      setData(res.data)
      console.log(res.data);
      console.log(n);
    }).catch(error=>{
      if(error.response){
        console.log(error.response.data);
        setErrorMessage(error.response.data)
      }else if(error.request){
        setErrorMessage(" No response recieved from the Server.")
      }else{
        setErrorMessage(" An unexpected error has been occured")
      }
      console.log("Error .",error);
    })
  };

  return (
    <div className=' container-fluid bg-light' style={{ height: '100vh' }}>
      <div className=' d-flex justify-content-center align-items-center' style={{ height: '100px' }}>
        <div className=' shadow-sm p-3 text-center bg-white w-100'>
          <h5>Summary Report</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center shadow bg-white p-4">
        <div className="w-50 p-3 bg-light shadow-sm rounded">
          <form onSubmit={handleSubmit}>
            <dl>
              <dt className="form-label d-flex justify-content-center">Case Number</dt>
              <dd className=" d-flex justify-content-center"> <input
              className="text-center"
                type="number"
                id="caseNumber"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)}
                placeholder="Case Number"
                required
              /></dd>
            </dl>
            <div className="col-12">
            <div className=' text-success text-center'>{successMessage}</div>
            <div className=' text-danger text-center'>{errorMessage}</div>
              <dd className=" d-flex justify-content-center"><button type="submit"
                className="btn btn-dark w-50 mt-3">Submit</button></dd>
            </div>
          </form>
        </div>
      </div>

      {/* Display Summary */}
      {data ? (
        <div className=" d-flex justify-content-center align-content-center mt-3 shadow bg-white p-4" style={{ height: '200vh' }}>
          <div>
            <div className="summary-section">
              <div className="section">
                <h3>Plan Details</h3>
                <p><strong>Plan Name:</strong> {data.planName}</p>
              </div>

              <div className="section">
                <h3>Citizen Details</h3>
                <p><strong>Full Name:</strong> {data.citizeDetails.fullName}</p>
                <p><strong>Email:</strong> {data.citizeDetails.email}</p>
                <p><strong>Gender:</strong> {data.citizeDetails.gender}</p>
                <p><strong>Phone Number:</strong> {data.citizeDetails.phoneNumber}</p>
                <p><strong>SSN:</strong> {data.citizeDetails.ssn}</p>
                <p><strong>DOB:</strong> {data.citizeDetails.dob}</p>
              </div>

              <div className="section">
                <h3>Income Details</h3>
                <p><strong>Income Id:</strong> {data.incomeDetails.incomeId}</p>
                <p><strong>CaseNo:</strong> {data.incomeDetails.caseNumber}</p>
                <p><strong>Employee Income:</strong> {data.incomeDetails.empIncome}</p>
                <p><strong>Property Income:</strong> {data.incomeDetails.propertyIncome}</p>
              </div>

              <div className="section">
                <h3>Education Details</h3>
                <p><strong>Education Id:</strong> {data.educationDetails.educationId}</p>
                <p><strong>Case Number:</strong> {data.educationDetails.caseNumber}</p>
                <p><strong>Highest Degree:</strong> {data.educationDetails.highestDegree}</p>
                <p><strong>Passout Year:</strong> {data.educationDetails.passoutYear}</p>
              </div>

              <div className="section">
                <h3>Children Details</h3>
                {data.childrenDetails.length > 0 ? (
                  data.childrenDetails.map((child, index) => (
                    <div key={index}>
                      <p><strong>Child   Id:</strong> {child.dob}</p>
                      <p><strong>Case Number</strong> {child.caseNumber}</p>
                      <p><strong>Child DOB:</strong> {child.dob}</p>
                      <p><strong>Child ssn</strong> {child.dob}</p>
                      <hr />
                      <div></div>
                    </div>
                  ))
                ) : (
                  <p>No children</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        null
      )}


    </div>
  );
};

export default Summary;
