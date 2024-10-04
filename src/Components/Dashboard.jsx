// Dashboard.js
import React, { useState } from 'react';
import '../Styles/Dashboard.css'; // Import custom CSS for additional styling

function Dashboard() {
  // Sample data for the dashboard cards
  const cardData = [
    { title: 'Total Claims', value: 1200, bgColor: '#4e73df' },
    { title: 'Active Policies', value: 850, bgColor: '#1cc88a' },
    { title: 'Pending Approvals', value: 75, bgColor: '#36b9cc' },
    { title: 'New Enrollments', value: 300, bgColor: '#f6c23e' },
    { title: 'Customer Satisfaction', value: '95%', bgColor: '#e74a3b' },
    { title: 'Revenue', value: '$1.2M', bgColor: '#858796' },
  ];

  // Sample data for recent activities
  const activities = [
    { date: '2024-09-25', activity: 'Claim Approval', status: 'Completed', assignedTo: 'John Doe' },
    { date: '2024-09-24', activity: 'Policy Renewal', status: 'Pending', assignedTo: 'Jane Smith' },
    { date: '2024-09-23', activity: 'New Enrollment', status: 'Completed', assignedTo: 'Emily Johnson' },
    { date: '2024-09-22', activity: 'Claim Submission', status: 'Pending', assignedTo: 'Michael Brown' },
    { date: '2024-09-21', activity: 'Policy Cancellation', status: 'Completed', assignedTo: 'Sarah Davis' },
    { date: '2024-09-20', activity: 'Document Verification', status: 'Completed', assignedTo: 'David Wilson' },
    { date: '2024-09-19', activity: 'Claim Rejection', status: 'Pending', assignedTo: 'Laura Martinez' },
    { date: '2024-09-18', activity: 'Policy Upgrade', status: 'Completed', assignedTo: 'Robert Garcia' },
    { date: '2024-09-17', activity: 'New Claim Submission', status: 'Pending', assignedTo: 'Linda Anderson' },
    { date: '2024-09-16', activity: 'Customer Feedback', status: 'Completed', assignedTo: 'James Thomas' },
    // Add more activities as needed
  ];

  // Search state
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter activities based on search term
  const filteredActivities = activities.filter(activity =>
    Object.values(activity).some(
      value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageData = filteredActivities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    // Generate page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    // Handle edge cases for pagination
    if (totalPages === 0) return null;

    return (
      <nav aria-label="Page navigation example">
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
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button
                className="page-link"
                onClick={() => handlePageChange(number)}
              >
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
    <div className="container-fluid p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
       <div className=' d-flex justify-content-center align-items-center' style={{ height: '100px' }}>
        <div className=' shadow p-3 text-center bg-white w-100'>
          <h4>DashBoard Page</h4>
        </div>
      </div>
      {/* Dashboard Cards */}
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div
              className="card text-white shadow-sm dashboard-card"
              style={{
                backgroundColor: card.bgColor,
                height: '150px',
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div className="card-overlay d-flex flex-column justify-content-center align-items-center text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text display-6">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Recent Activities</h3>
          {/* Search Input Group */}
          <div className="input-group" style={{ maxWidth: '300px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Activities"
              aria-label="Search Activities"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Activity</th>
                <th scope="col">Status</th>
                <th scope="col">Assigned To</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPageData.length > 0 ? (
                currentPageData.map((activity, index) => (
                  <tr key={index}>
                    <td>{activity.date}</td>
                    <td>{activity.activity}</td>
                    <td>
                      <span
                        className={`badge ${
                          activity.status === 'Completed' ? 'bg-success' :
                          activity.status === 'Pending' ? 'bg-warning' :
                          'bg-secondary'
                        }`}
                      >
                        {activity.status}
                      </span>
                    </td>
                    <td>{activity.assignedTo}</td>
                    <td>
                      <button className="btn btn-primary btn-sm me-2">View</button>
                      <button className="btn btn-secondary btn-sm">Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">No activities found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        {renderPagination()}
      </div>

      {/* Statistics Charts Placeholder */}
      {/* <div className="mt-5">
        <h3>Statistics</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h5>Claims Overview</h5>
              <p>Chart goes here</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h5>Policy Distribution</h5>
              <p>Chart goes here</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
