import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { CREATE_PLAN } from '../Helper/Constant'
function Plans() {
  const [successMessage,setSuccessMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const formik = useFormik({
    initialValues:{
      planName:'',
      planStartDate:'',
      planEndDate:'',
      description:'',
      activeSw:''
    },validationSchema:yup.object({
      planName:yup.string().required("Plan Name is required"),
      planStartDate:yup.string().required("Plan start date is required"),
      planEndDate:yup.string().required("Plan end date is required"),
      description:yup.string().required("Plan description is required").min(10,"Plan description is too short"),
      activeSw:yup.string().required("Plan Status is required")
    }),
    onSubmit:(res)=>{
      // alert(JSON.stringify(res))
      axios({
        method:'post',
        url:CREATE_PLAN,
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
    <div className=' container-fluid bg-light' style={{height:'100vh'}}>
    <div className=' d-flex justify-content-center align-items-center' style={{height:'100px'}}>
        <div className=' text-center bg-white shadow-sm w-100'>
            <h5 className=' p-3'>Add Plans</h5>
        </div>
    </div>
    <div className="d-flex justify-content-center align-items-center shadow bg-white p-4">
      <div className="w-50 p-3 bg-light shadow-sm rounded">
      <form onSubmit={formik.handleSubmit}>
            <dl className="row">
              <div className="col-md-6">
                <dt className="form-label">Plan Name</dt>
                <dd><input type="text" className="form-control"
                  name='planName' onChange={formik.handleChange}
                  placeholder="Enter Plan Name " /></dd>
                  <dd className=' text-danger'>{formik.errors.planName}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Plan Start Date</dt>
                <dd><input type="date"
                  className="form-control"
                  name='planStartDate' onChange={formik.handleChange}
                  placeholder="Enter Plan Start Date" /></dd>
                  <dd className=' text-danger'>{formik.errors.planStartDate}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Plan End Date</dt>
                <dd><input type="date"
                  className="form-control"
                  name='planEndDate'
                  onChange={formik.handleChange}
                  placeholder="Enter Plan End Date" /></dd>
                  <dd className=' text-danger'>{formik.errors.planEndDate}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Plan description</dt>
                <dd><input type="text"
                  className="form-control"
                  name='description'
                  onChange={formik.handleChange}
                  placeholder="Enter Plan description" /></dd>
                  <dd className=' text-danger'>{formik.errors.description}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Plan Status</dt>
                <dd><input type="text"
                  className="form-control"
                  name='activeSw'
                  onChange={formik.handleChange}
                  placeholder="Enter Plan status" /></dd>
                  <dd className=' text-danger'>{formik.errors.activeSw}</dd>
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

export default Plans