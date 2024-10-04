import React, { useState, useEffect } from 'react';

const BenefitAssurance = () => {
  const [benefitData, setBenefitData] = useState({
    totalEligibleUsers: 150,
    totalBenefitAmount: 500000, // Total amount in a currency format
    issuanceDate: '2024-09-28',
    bankName: 'State National Bank',
    benefitCurrency: 'USD',
    breakdown: [
      { planType: 'Health Insurance', users: 80, amount: 300000 },
      { planType: 'Life Insurance', users: 50, amount: 150000 },
      { planType: 'Disability Insurance', users: 20, amount: 50000 }
    ],
    userDemographics: {
      ageGroups: {
        '18-25': 30,
        '26-40': 70,
        '41-60': 40,
        '60+': 10
      },
      genders: {
        male: 90,
        female: 60
      }
    }
  });

  useEffect(() => {
    // Here you can add any data fetching logic if needed.
    // For now, it's using dummy data.
  }, []);

  return (
    <div className="container-fluid bg-light py-4" style={{ minHeight: "100vh" }}>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="shadow-sm p-3 text-center bg-white w-100">
          <h3>Benefit Issurance Summry</h3>
        </div>
        </div>
        {/* General Information */}
       <div className=' bg-white shadow-sm p-4'>
       <div className="row mb-3">
          <div className="col-md-6">
            <h5>Total Eligible Users:</h5>
            <p className="lead">{benefitData.totalEligibleUsers}</p>
          </div>
          <div className="col-md-6">
            <h5>Total Benefit Amount:</h5>
            <p className="lead">
              {benefitData.benefitCurrency} {benefitData.totalBenefitAmount.toLocaleString()}
            </p>
          </div>
          <div className="col-md-6">
            <h5>Issuance Date:</h5>
            <p className="lead">{benefitData.issuanceDate}</p>
          </div>
          <div className="col-md-6">
            <h5>Bank Name:</h5>
            <p className="lead">{benefitData.bankName}</p>
          </div>
        </div>

        {/* Breakdown by Insurance Plan */}
        <h5 className="mt-4">Benefit Breakdown by Insurance Plan:</h5>
        <table className="table table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Plan Type</th>
              <th>Eligible Users</th>
              <th>Benefit Amount</th>
            </tr>
          </thead>
          <tbody>
            {benefitData.breakdown.map((item, index) => (
              <tr key={index}>
                <td>{item.planType}</td>
                <td>{item.users}</td>
                <td>
                  {benefitData.benefitCurrency} {item.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* User Demographics */}
        <h5 className="mt-4">User Demographics:</h5>
        <div className="row">
          <div className="col-md-6">
            <h6>Age Groups:</h6>
            <ul className="list-group">
              {Object.entries(benefitData.userDemographics.ageGroups).map(([ageGroup, count], index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {ageGroup}
                  <span className="badge bg-primary rounded-pill">{count}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h6>Gender Distribution:</h6>
            <ul className="list-group">
              {Object.entries(benefitData.userDemographics.genders).map(([gender, count], index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {gender}
                  <span className="badge bg-success rounded-pill">{count}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
       </div>
      </div>
  );
};

export default BenefitAssurance;
