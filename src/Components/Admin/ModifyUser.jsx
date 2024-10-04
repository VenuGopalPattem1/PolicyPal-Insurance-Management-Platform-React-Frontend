import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { CREATE_USER, FIND_USER_USER_BY_ID, UPDATE_USER_USER_BY_ID } from '../Helper/Constant';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ModifyUser() {
  const param=useParams();
  const navigate = useNavigate();
  const [successMessage,setSuccessMessage] = useState('');
  const [errorMessage,setErrorMessage] = useState('');
  const[data,setData] = useState({
    accountId: '',
    name: '',
    email: '',
    pwd: '',
    gender: '',
    ssn: '',
    dob: '',
    activeSw: ''
  })
  const formik = useFormik({
    initialValues: {
      accountId: data.accountId,
      name: data.name,
      email:data.email,
      pwd: data.pwd,
      gender:data.gender,
      ssn:data.ssn,
      dob:data.dob,
      activeSw:data.activeSw
    }, enableReinitialize:true,
    validationSchema: yup.object({
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
        method:'put',
        url:UPDATE_USER_USER_BY_ID,
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
    
  }
)


  useEffect(()=>{
    findById();
  },[])

  function findById(){
    axios({
      method:'get',
      url:`${FIND_USER_USER_BY_ID}${param.id}`,
    }).then(res=>{
      setData(res.data);
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
  return (
    <div className=' container-fluid bg-light' style={{ height: '100vh' }}>
      <div className=' d-flex justify-content-center align-items-center' style={{ height: '100px' }}>
        <div className=' text-center bg-white shadow-sm w-100'>
          <h5 className=' p-3'>Modify User Data</h5>
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
                  placeholder="Enter User Name " value={formik.values.name}/></dd>
                <div className=' text-danger'>{formik.errors.name}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">User Email Adress</dt>
                <dd><input type="email"
                  className="form-control"
                  name='email' onChange={formik.handleChange}
                  placeholder="Enter User email address" value={formik.values.email}/></dd>
                <div className=' text-danger'>{formik.errors.email}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Password</dt>
                <dd><input type="password"
                  className="form-control"
                  name='pwd'
                  onChange={formik.handleChange}
                  placeholder="Enter User password" value={formik.values.pwd}/></dd>
                <div className=' text-danger'>{formik.errors.pwd}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Identity Number</dt>
                <dd><input type="number"
                  className="form-control"
                  name='ssn'
                  onChange={formik.handleChange}
                  placeholder="Enter Your Unique Identity Number" value={formik.values.ssn}/>
                  <div className=' text-danger'>{formik.errors.ssn}</div>
                </dd>
              </div>
              <div className="col-md-6">
                <dt className="form-label">Gender</dt>
                <dd>
                  <select className="form-select"
                    name='gender'
                    onChange={formik.handleChange}> value={formik.values.gender}
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
                  value={formik.values.dob}
                  onChange={formik.handleChange} />
                </dd>
                <div className=' text-danger'>{formik.errors.dob}</div>
              </div>
              <div className="col-md-6">
                <dt className="form-label">User Status</dt>
                <dd><input type="text"
                  className="form-control"
                  name='activeSw'
                  value={formik.values.activeSw}
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

export default ModifyUser