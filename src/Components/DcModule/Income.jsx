import React, { useState } from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { SAVE_INCOME_DATA } from '../Helper/Constant'

function Income() {
  const [successMessage,setSuccessMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      caseNumber: '',
      empIncome: '',
      propertyIncome: ''
    },
    validationSchema: yup.object({
      caseNumber: yup.string().required("Case Number is required"),
      empIncome: yup.string().required("Annual Income is Required ").min(3, "Annual Income  Too Short"),
      propertyIncome: yup.string().required("Property Income is Required")
    }),
    onSubmit: (res => {
      // alert(JSON.stringify(res))
      axios({
        method:'post',
        url:SAVE_INCOME_DATA,
        data:res
      }).then(res=>{
        setSuccessMessage(res.data)
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
    })
  })
  return (
    <div className=' container-fluid bg-light' style={{ height: '100vh' }}>
      <div className=' d-flex justify-content-center align-items-center' style={{ height: '100px' }}>
        <div className=' shadow-sm p-3 text-center bg-white w-100'>
          <h5>Income Details Registration Form</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center  shadow bg-white p-4">
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
                <dt className="form-label">Annual Income</dt>
                <dd><input type="number"
                  className="form-control"
                  name='empIncome' onChange={formik.handleChange}
                  placeholder="Enter Annual Income" /></dd>
                <dd className=' text-danger'>{formik.errors.empIncome}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Property Income</dt>
                <dd><input type="number"
                  className="form-control"
                  name='propertyIncome'
                  onChange={formik.handleChange}
                  placeholder="Enter Property Income" /></dd>
                <dd className=' text-danger'>{formik.errors.propertyIncome}</dd>
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

export default Income