import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { GENERATE_CASE_NO, GET_ALL_PLAN_NAMES, UPDATE_CASES_ENTITY } from '../Helper/Constant';
import axios from 'axios';

function CaseNumber() {
  const [CaseNumber, setCaseNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [planData, setPlanData] = useState([]);
  const [caseEntity, setCaseEntity] = useState({ caseNo: '', appId: '', planId: '' });

  // Fetch all plan names when the component loads
  useEffect(() => {
    axios.get(GET_ALL_PLAN_NAMES)
      .then(res => {
        setPlanData(res.data);
        console.log(res.data);
      })
      .catch(error => {
        setErrorMessage('Failed to fetch plans.');
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      appRegId: '',
      planId: ''
    },
    validationSchema: yup.object({
      appRegId: yup.string().required("Application Registration Id Is Required"),
      planId: yup.string().required("Plan Id Is Required")
    }),
    onSubmit: async (values) => {
      try {
        // Generate Case Number
        const caseResponse = await axios.get(`${GENERATE_CASE_NO}${values.appRegId}`);
        
        // Set Case Number and Case Entity after generating case number
        const newCaseEntity = {
          caseNo: caseResponse.data,
          appId: values.appRegId,
          planId: parseInt(values.planId)  // Make sure planId is an integer
        };
        setCaseEntity(newCaseEntity);
        setCaseNumber(caseResponse.data);
        console.log(caseResponse.data);

        // Clear any previous error messages
        setErrorMessage('');

        // Alert case number
        alert("Your Case Number is " + caseResponse.data);

        // Update CaseEntity by sending the newCaseEntity data
        const updateResponse = await axios.post(UPDATE_CASES_ENTITY, newCaseEntity);
        console.log('Case Entity updated:', updateResponse.data);

      } catch (error) {
        if (error.response) {
          setErrorMessage(error.response.data);
        } else if (error.request) {
          setErrorMessage('No response received from the server.');
        } else {
          setErrorMessage('An unexpected error occurred.');
        }
        console.error('Error:', error);
      }
    }
  });

  return (
    <div className='container-fluid bg-light' style={{ height: '100vh' }}>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100px' }}>
        <div className='bg-white w-100 p-3 shadow-sm text-center'>
          <h5>Case Number Generator</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center shadow bg-white p-4">
        <div className="w-50 p-3 bg-light shadow-sm rounded">
          <form onSubmit={formik.handleSubmit}>
            <dl>
              <dt className="form-label">Application Registration Id</dt>
              <dd>
                <input
                  type="number"
                  className="form-control"
                  name='appRegId'
                  value={formik.values.appRegId}
                  onChange={formik.handleChange}
                  placeholder="Enter Application Registration Id"
                />
              </dd>
              <dd className='text-danger'>{formik.errors.appRegId}</dd>
            </dl>

            <dl>
              <dt className="form-label">Select Plan Name</dt>
              <dd>
                <select
                  name="planId"
                  value={formik.values.planId}
                  onChange={formik.handleChange}
                  className='form-select'
                >
                  <option value="" disabled>Select Plan</option>
                  {planData.map(item => (
                    <option key={item.planId} value={item.planId}>
                      {item.planName}
                    </option>
                  ))}
                </select>
              </dd>
              <dd className='text-danger'>{formik.errors.planId}</dd>
            </dl>

            <div className="col-12">
              <button type="submit" className="btn btn-dark w-100 mt-3">Submit</button>
            </div>

            {/* Error or success message */}
            {errorMessage && <div className='text-danger mt-3'>{errorMessage}</div>}
            {CaseNumber && <div className='text-success mt-3'>Generated Case Number: {CaseNumber}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CaseNumber;
