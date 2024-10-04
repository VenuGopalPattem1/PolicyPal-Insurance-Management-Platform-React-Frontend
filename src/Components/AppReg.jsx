import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup'
import { REGISTER_CITIZEN_APPLICATION } from './Helper/Constant';

function AppReg() {
  const [errorMessage,setErrorMessage] = useState('');
  const [successMessage,setSuccessMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      gender: '',
      phoneNumber: '',
      ssn: '',
      dob: '',
    },
    validationSchema:yup.object({
      fullName:yup.string().required("Username is required").min(4,"Name is too short"),
      phoneNumber:yup.string().required("Password is required").min(10,"Number is too short"),
      ssn:yup.string().required("Unique Identification number is required").min(9,"Idnetity Number is too short"),
      dob:yup.string().required("Bate Of Birth is required"),
      gender:yup.string().required("Gender is required")
    }),
    onSubmit: (res) => {
      // alert(JSON.stringify(res))
      console.log(res);
      
      axios({
        method:'post',
        url:REGISTER_CITIZEN_APPLICATION,
        data:res
      }).then(out=>{
        alert(out.data)
        setSuccessMessage(out.data);
        console.log(out.data);
      })
      .catch(error=>{
        if(error.response){
          setErrorMessage(error.response.data)
          console.log(error.response.data);
        }else if (error.request) {
          // Handle no response received from server
          setErrorMessage('No response received from the server.');
        } else {
          // Handle other types of errors (network issues, etc.)
          setErrorMessage('An unexpected error occurred.');
        }
      });
    }
  });
  return (
    <div className="container-fluid bg-light" style={{ height: '100vh' }}>
         <div className=' d-flex justify-content-center align-items-center' style={{height:'100px'}}>
        <div className=' shadow p-3 text-center bg-white w-100'>
          <h5>Citizen Application Registration Form</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 shadow bg-white p-4">
        <div className="w-50 p-3 bg-light shadow-sm rounded">
          <form onSubmit={formik.handleSubmit}>
            <dl className="row">
              <div className="col-md-6">
                <dt className="form-label">Full Name</dt>
                <dd><input type="text" className="form-control"
                  name='fullName' onChange={formik.handleChange}
                  placeholder="Enter Full name" /></dd>
                  <div className=' text-danger'>{formik.errors.fullName}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Email</dt>
                <dd><input type="email"
                  className="form-control"
                  name='email' onChange={formik.handleChange}
                  placeholder="Enter Email Address" /></dd>
                  <div className=' text-danger'>{formik.errors.email}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Mobile Number</dt>
                <dd><input type="number"
                  className="form-control"
                  name='phoneNumber'
                  onChange={formik.handleChange}
                  placeholder="Enter Mobile Number" /></dd>
                  <div className=' text-danger'>{formik.errors.phoneNumber}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Identity Number</dt>
                <dd><input type="number"
                  className="form-control"
                  name='ssn'
                  onChange={formik.handleChange}
                  placeholder="Enter Your Unique Identity Number" />
                  <div className=' text-danger'>{formik.errors.ssn}</div>
                </dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Date Of Birth</dt>
                <dd><input type="date"
                  className="form-control"
                  name='dob'
                  onChange={formik.handleChange} />
                </dd>
                <div className=' text-danger'>{formik.errors.dob}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Gender</dt>
                <dd>
                  <select className="form-select"
                    name='gender'
                    onChange={formik.handleChange}>
                    <option>Select Your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </dd>
                <div className=' text-danger'>{formik.errors.gender}</div>
              </div>
              <div className="col-12">
              <div className=' text-success'>{successMessage}</div>
                <div className=' text-danger'>{errorMessage}</div>
                <dd><button type="submit"
                  className="btn btn-dark w-100 mt-3">Submit</button></dd>
              </div>
            </dl>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AppReg;
