import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DELETE_PLAN_BY_ID, GET_ALL_PLAN, UPDATE_STATUS_PLAN_ID } from '../Helper/Constant';
import { Link } from 'react-router-dom';

function EditPlans() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    getTableData();
  }, [successMessage]);

  function getTableData() {
    axios({
      method: 'get',
      url: GET_ALL_PLAN,
    })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          setSuccessMessage(error.response.data);
        } else if (error.request) {
          setErrorMessage("No result was found from the server");
        } else {
          setErrorMessage("Something unexpected happened");
        }
      });
  }

  //for delete operation
  function handleDelete(e){
   const data= window.confirm(' do you want to delete the plan with id value '+e.target.value)
   console.log(data);
   if(data){
    axios({
      method: 'delete',
      url: `${DELETE_PLAN_BY_ID}${e.target.value}`,
    })
      .then((res) => {
        // setData(res.data);
        setSuccessMessage(res.data);
        console.log(res.data);
        alert(res.data)
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        } else if (error.request) {
          setErrorMessage("No result was found from the server");
        } else {
          setErrorMessage("Something unexpected happened");
        }
      });
   }
   
  }

  //for status change operations
  function hadleStatus(e){
    // console.log(e.target.value);
   const c= window.confirm("Do You want to change the status of the Plan")
   if(c){
    if(e.target.value ==='active'){
     console.log(e.target.id+" "+e.target.value);
     axios({
      method: 'PATCH',
      url: `${UPDATE_STATUS_PLAN_ID}${e.target.id}/inactive`,
    })
      .then((res) => {
        // setData(res.data);
        setSuccessMessage(res.data);
        console.log(res.data);
        alert(res.data)
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        } else if (error.request) {
          setErrorMessage("No result was found from the server");
        } else {
          setErrorMessage("Something unexpected happened");
        }
      });
    }
      else{
        console.log(e.target.id+" "+e.target.value);
     axios({
      method: 'PATCH',
      url: `${UPDATE_STATUS_PLAN_ID}${e.target.id}/active`,
    })
      .then((res) => {
        // setData(res.data);
        setSuccessMessage(res.data);
        // console.log(res.data);
        alert(res.data)
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        } else if (error.request) {
          setErrorMessage("No result was found from the server");
        } else {
          setErrorMessage("Something unexpected happened");
        }
      });
      }
   }
  }
  // Filter data based on the search term
  const filteredData = Array.isArray(data)
  ? data.filter((item) =>
      Object.values(item).some(
        (value) =>
          value && // Check if the value is not null or undefined
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  : [];


  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    // Generate page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    if (totalPages === 0) return null;

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous"
            >
              &laquo;
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(number)}>
                {number}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next"
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
        <div className="shadow p-3 text-center bg-white w-100">
          <h5>Plans Edits Page</h5>
        </div>
      </div>

      {/* Search Input */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Plans</h3>
        <div className="input-group" style={{ maxWidth: '300px' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search Case Details"
            aria-label="Search Case Details"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="button" onClick={() => setSearchTerm('')}>
            Clear
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="table-responsive ">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Plan Id</th>
              <th scope="col">Plan Name</th>
              <th scope="col">Plan Start Date</th>
              <th scope="col">Plan End Date</th>
              <th scope="col">Description</th>
              <th scope="col">Plan Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.length > 0 ? (
              currentPageData.map((item, index) => (
                <tr key={index}>
                  <td>{item.planId}</td>
                  <td>{item.planName}</td>
                  <td>{item.planStartDate}</td>
                  <td>{item.planEndDate}</td>
                  <td>{item.description}</td>
                  {/* Conditional rendering of plan status */}
                  <td>
                    <span className={`btn btn-sm ${item.activeSw === 'active' ? 'btn-success' : 'btn-danger'}`}>
                      {item.activeSw === 'inactive' ? 'inactive':'Active'}
                    </span>
                  </td>
                  {/* Action Buttons */}
                  <td>
                  <Link to={`/plan/${item.planId}`}><button  className="btn btn-primary btn-sm me-2">Edit</button></Link>
                    <button onClick={hadleStatus} value={item.activeSw} id={item.planId} className="btn btn-info btn-sm me-2 text-black">EditStatus</button>
                    <button onClick={handleDelete} value={item.planId} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      {renderPagination()}

      {/* Error/Success Messages */}
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
    </div>
  );
}

export default EditPlans;
