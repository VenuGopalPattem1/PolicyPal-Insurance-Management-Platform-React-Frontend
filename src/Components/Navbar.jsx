import React from 'react';

function Navbar() {
    return (
        <div className='container-fluid shadow-sm p-2'>
        <div className='d-flex align-items-center justify-content-between w-100 px-5'>
          {/* Left Section */}
          <div className='d-flex align-items-center'>
            <h2 className='me-3'>PolicyPal: Insurance Management Platform</h2>
      
            {/* Search Bar */}
            <div className='input-group' style={{ marginLeft:'400px',maxWidth: '400px' }}>
              <img
                src="https://th.bing.com/th?q=Search+Icon+Transparent+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
                alt="Search Icon"
                className='mt-2 me-2'
                style={{ height: '30px', cursor: 'pointer' }}
              />
              <input
                type='text'
                className='form-control rounded'
                style={{ height: '40px' }}
                placeholder='Search Dashboard...'
              />
            </div>
          </div>
      
          {/* Right Section */}
          <div className='d-flex align-items-center'>
            <img
              src="https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2"
              alt="User profile"
              style={{ height: '40px', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
      

      
    );
}

export default Navbar;
