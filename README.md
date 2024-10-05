# <span style="color: #4CAF50;">PolicyPal Insurance Management UI</span>

## <span style="color: #2196F3;">Overview</span>
**PolicyPal Insurance Management UI** is the frontend application for the PolicyPal project, which is built on a Spring Boot microservice architecture. The application interacts with backend services to manage health insurance data efficiently and provides a smooth user experience through various features.

## <span style="color: #2196F3;">GitHub Repository</span>
- Backend Repository: [PolicyPal Insurance Spring Boot Backend](https://github.com/VenuGopalPattem1/PolicyPal-Insurance-SpringBoot-Backend.git)

## <span style="color: #FF9800;">Technologies Used</span>
- **React**: For building the user interface.
- **React Router DOM**: For application routing.
- **Axios**: For making API calls to the backend.
- **Formik**: For handling forms.
- **Yup**: For form validation.
- **Bootstrap**: For styling and enhancing the user experience.
- **React Hooks**: For efficient state management.

## <span style="color: #FF9800;">Features</span>

### <span style="color: #3F51B5;">Search Functionality</span>
- Users can filter displayed user data based on a search term, providing a focused view of relevant entries.

### <span style="color: #3F51B5;">Pagination</span>
- Implements pagination to manage large datasets, displaying 8 entries per page and enabling users to navigate through additional records.

### <span style="color: #3F51B5;">User Management Operations</span>
- **Delete User**: Users can delete records with a confirmation dialog to prevent accidental deletions.
- **Edit User**: Each user entry has an "Edit" button that navigates to a user-specific edit page.
- **Status Update**: Users can change status (active/inactive) with a confirmation dialog, and the app sends a PATCH request to update the user status.

### <span style="color: #3F51B5;">Error and Success Handling</span>
- Displays error messages for failed API calls and success messages for completed actions like deletions or status updates, enhancing the user experience.

### <span style="color: #3F51B5;">Dynamic Table</span>
- The table updates dynamically based on filtered data and pagination, allowing seamless interaction.

### <span style="color: #3F51B5;">Form Handling & Validation</span>
- Forms (e.g., eligibility check, registration) are built with Formik for efficient management, and Yup is used for validation.

### <span style="color: #3F51B5;">Eligibility Determination</span>
- Users can enter their information to check eligibility for various health insurance plans, with results displayed dynamically based on backend data.

### <span style="color: #3F51B5;">Dynamic and Modular Dashboard</span>
- **Correspondence Dashboard**: Displays real-time statistics such as total triggers, pending triggers, and successful triggers.
- **Admin Dashboard**: Provides a management view for handling caseworkers, policies, and correspondence.

### <span style="color: #3F51B5;">Component-based Design</span>
- The application utilizes reusable components for a clean and maintainable structure, including an expandable sidebar for navigation.

### <span style="color: #3F51B5;">State Management & API Integration</span>
- Axios is used for API calls, and state management is handled with React’s useState or context API for smooth data flow.

### <span style="color: #3F51B5;">PDF and Email Integration (Scheduler)</span>
- Functionality for automated PDF report generation and email sending via a scheduler, with frontend components to trigger or display statuses.

### <span style="color: #3F51B5;">Expandable Sidebar Navigation</span>
- The sidebar features a parent-child structure, allowing users to navigate through modules like “Data Collection” and “Admin,” enhancing usability while maintaining a clean interface.

## <span style="color: #FF9800;">Installation</span>

To run the PolicyPal frontend application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VenuGopalPattem1/PolicyPal-Insurance-React-Frontend.git
