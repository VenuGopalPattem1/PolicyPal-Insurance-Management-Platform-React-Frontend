import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ELGI_REPORT_GETDATA } from './Helper/Constant';

function Reports() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    getTableData();
  }, []);

  function getTableData() {
    axios({
      method: 'get',
      url: ELGI_REPORT_GETDATA,
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

 // Filter data based on the search term
const filteredData = data.filter((item) =>
  Object.values(item).some(
    (value) =>
      value && // Check if the value is not null or undefined
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  )
);

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
          <h5>Reports Generation Page</h5>
        </div>
      </div>

      {/* Search Input */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Reports</h3>
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
              <th scope="col">Case No</th>
              <th scope="col">Holder Name</th>
              <th scope="col">SSN</th>
              <th scope="col">Plan Name</th>
              <th scope="col">Plan Status</th>
              <th scope="col">Benefit Amount</th>
              <th scope="col">Denial Reason</th>
              <th scope="col">Plan Start Date</th>
              <th scope="col">Plan End Date</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.length > 0 ? (
              currentPageData.map((item, index) => (
                <tr key={index}>
                  <td>{item.caseNo}</td>
                  <td>{item.holderName}</td>
                  <td>{item.holderSsn}</td>
                  <td>{item.planName}</td>
                  <td>{item.planStatus}</td>
                  <td>${item.benfitAmount}</td>
                  <td>{item.planStatus === "denied" ? item.denialReason : "-"}</td>
                  <td>{item.planStartDate}</td>
                  <td>{item.planEndDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">No results found</td>
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

export default Reports;
