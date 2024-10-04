import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { SAVE_CHILD_DATA } from '../Helper/Constant';

function Children() {
  const [errorMessage,setErrorMessage] = useState('');
  const [successMessage,setSuccessMessage] = useState('');
  const [child,setChild] = useState([]);
  const formik = useFormik({
    initialValues:{
      caseNumber:'',
      ssn:'',
      dob:''
    },
    validationSchema:yup.object({
      caseNumber:yup.string().required("Case Number is required"),
      ssn:yup.string().required("Unique Identifycation is Required ").min(8,"Unique Identification Number is Too Short"),
      dob:yup.string().required("Children date Of Birth is Required")
    }),
    onSubmit:(res)=>{
      // alert(JSON.stringify(res))
      setChild(res)
      axios({
        method:'post',
        url:SAVE_CHILD_DATA,
        data:[res]
      }).then(response=>{
        setSuccessMessage(response.data)
        console.log(response.data);
      }).catch(error=>{
        if(error.response){
          setErrorMessage(error.response.data)
        } else if (error.request) {
          setErrorMessage('No response received from the server.');
        } else {
          setErrorMessage('An unexpected error occurred.');
        }
        console.error('Error:', error);
      });
    }
  });
  return (
    <div className=' container-fluid bg-light' style={{height:'100vh'}}>
      <div className=' d-flex justify-content-center align-items-center' style={{height:'100px'}}>
        <div className=' shadow-sm p-3 text-center bg-white w-100'>
          <h5>Childrens Registration Form</h5>
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
                <dt className="form-label">Children Identification Number</dt>
                <dd><input type="number"
                  className="form-control"
                  name='ssn' onChange={formik.handleChange}
                  placeholder="Enter Childre Unique Identification Number" /></dd>
                  <dd className=' text-danger'>{formik.errors.ssn}</dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Date Of Birth</dt>
                <dd><input type="date"
                  className="form-control"
                  name='dob'
                  onChange={formik.handleChange}
                  placeholder="Enter Date Of Birth of the children" /></dd>
                  <dd className=' text-danger'>{formik.errors.dob}</dd>
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

export default Children