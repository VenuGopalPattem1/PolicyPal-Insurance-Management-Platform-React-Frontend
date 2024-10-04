import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { SAVE_EDUCATIONAL_DATA } from '../Helper/Constant'

function Education() {
  const[successMessage,setSuccessMessage] = useState('');
  const[errorMessage,setErrorMessage] = useState('');
  const formik = useFormik({
    initialValues:{
      caseNumber:'',
      highestDegree:'',
      passoutYear:''
    },
    validationSchema:yup.object({
      caseNumber:yup.string().required("Case Number is required"),
      highestDegree:yup.string().required("Highest Degree Name is Required ").min(3,"Highest Degree Name is Too Short"),
      passoutYear:yup.string().required("Passout Year is Required").min(4,"Passout Year is too short")
    }),
    onSubmit:(res=>{
      // alert(JSON.stringify(res))
      axios({
        method:'post',
        url:SAVE_EDUCATIONAL_DATA,
        data:res
      }).then(res=>{
        setSuccessMessage(res.data)
        console.log(res.data);
      })
      .catch(error=>{
        if(error.response){
          setErrorMessage(error.response.data)
        }else if(error.request){
          setErrorMessage("No response from the server")
        }else{
          setErrorMessage(" An unexpected error has been happend")
        }
        console.log("Error .",error);
      })
    })
  })
  return (
    <div className=' container-fluid bg-light' style={{height:'100vh'}}>
      <div className=' d-flex justify-content-center align-items-center' style={{height:'100px'}}>
        <div className=' shadow-sm p-3 text-center bg-white w-100'>
          <h5>Educational Details Registration Form</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center shadow bg-white p-4">
      <div className="w-50 p-3 bg-light shadow-sm rounded">
      <form onSubmit={formik.handleSubmit}>
            <dl className="row">
              <div className="col-md-6">
                <dt className="form-label">Case Number</dt>
                <dd><input type="number" className="form-control"
                  name='caseNumber' onChange={formik.handleChange}
                  placeholder="Enter Case Number" /></dd>
                  <dd className=' text-danger'>{formik.errors.caseNumber}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Highest Degree</dt>
                <dd><input type="text"
                  className="form-control"
                  name='highestDegree' onChange={formik.handleChange}
                  placeholder="Enter Highest Degree Number" /></dd>
                  <dd className=' text-danger'>{formik.errors.highestDegree}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Passout Year</dt>
                <dd><input type="number"
                  className="form-control"
                  name='passoutYear'
                  onChange={formik.handleChange}
                  placeholder="Enter Passout Year" /></dd>
                  <dd className=' text-danger'>{formik.errors.passoutYear}</dd>
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
  )
}

export default Education