import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { CREATE_USER } from '../Helper/Constant';
import axios from 'axios';
function SaveCaseWorkers() {
  const [successMessage,setSuccessMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      pwd: '',
      gender: '',
      ssn: '',
      dob: '',
      activeSw: ''
    }, validationSchema: yup.object({
      name: yup.string().required("User Name is required").min(4, "User Name is too short"),
      email: yup.string().required("User email required"),
      pwd: yup.string().required("User password required").min(4, "password is too short"),
      gender: yup.string().required("User gender is required"),
      ssn: yup.string().required("Unique identifycation number is required ").min(8, "Unique Identification Number is too short"),
      dob: yup.string().required("User Date Of Birth is required"),
      activeSw: yup.string().required("User Status is required")
    }),
    onSubmit: (res) => {
       // alert(JSON.stringify(res))
       axios({
        method:'post',
        url:CREATE_USER,
        data:res
      }).then(res=>{
        setSuccessMessage(res.data);
      }).catch(error=>{
        if(error.response){
          setErrorMessage(error.response.data)
        }else if(error.request){
          setErrorMessage(" Nothing is coming from the server")
        }else{
          setErrorMessage(" Some thing went wrong")
        }
        console.log("Error .",error);
      })
    }
  })
  return (
    <div className=' container-fluid bg-light' style={{ height: '100vh' }}>
      <div className=' d-flex justify-content-center align-items-center' style={{ height: '100px' }}>
        <div className=' text-center bg-white shadow-sm w-100'>
          <h5 className=' p-3'>Add Users</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center shadow bg-white p-4">
        <div className="w-50 p-3 bg-light shadow-sm rounded">
          <form onSubmit={formik.handleSubmit}>
            <dl className="row">
              <div className="col-md-6">
                <dt className="form-label">User Name</dt>
                <dd><input type="text" className="form-control"
                  name='name' onChange={formik.handleChange}
                  placeholder="Enter User Name " /></dd>
                <div className=' text-danger'>{formik.errors.name}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">User Email Adress</dt>
                <dd><input type="email"
                  className="form-control"
                  name='email' onChange={formik.handleChange}
                  placeholder="Enter User email address" /></dd>
                <div className=' text-danger'>{formik.errors.email}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Password</dt>
                <dd><input type="password"
                  className="form-control"
                  name='pwd'
                  onChange={formik.handleChange}
                  placeholder="Enter User password" /></dd>
                <div className=' text-danger'>{formik.errors.pwd}</div>
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
                <dt className="form-label">User Status</dt>
                <dd><input type="text"
                  className="form-control"
                  name='activeSw'
                  onChange={formik.handleChange}
                  placeholder="Enter User status" /></dd>
                <div className=' text-danger'>{formik.errors.activeSw}</div>
              </div>
              <div className="col-12">
              <div className=' text-center text-success'>{successMessage}</div>
              <div className=' text-center text-danger'>{errorMessage}</div>
                <dd><button type="submit"
                  className="btn btn-dark w-100 mt-3">Submit</button></dd>
              </div>
            </dl>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SaveCaseWorkers