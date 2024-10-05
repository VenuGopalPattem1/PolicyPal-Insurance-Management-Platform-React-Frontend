# 🌟 PolicyPal Insurance Management UI

## Overview
**PolicyPal Insurance Management UI** is the frontend application for the PolicyPal project, built on a **Spring Boot microservice architecture**. This application interacts with backend services to manage health insurance data efficiently, providing a smooth user experience through various features.

## GitHub Repository
- **Backend Repository**: [PolicyPal Insurance Spring Boot Backend](https://github.com/VenuGopalPattem1/PolicyPal-Insurance-SpringBoot-Backend.git)

## Technologies Used
- **React**: For building the user interface.
- **React Router DOM**: For application routing.
- **Axios**: For making API calls to the backend.
- **Formik**: For handling forms.
- **Yup**: For form validation.
- **Bootstrap**: For styling and enhancing the user experience.
- **React Hooks**: For efficient state management.

## Features

### 🔍 Search Functionality
- Users can filter displayed user data based on a search term, providing a focused view of relevant entries.

### 📄 Pagination
- Implements pagination to manage large datasets, displaying **8 entries per page** and enabling users to navigate through additional records.

### 👤 User Management Operations
- **Delete User**: Users can delete records with a confirmation dialog to prevent accidental deletions.
- **Edit User**: Each user entry has an "Edit" button that navigates to a user-specific edit page.
- **Status Update**: Users can change status (active/inactive) with a confirmation dialog, and the app sends a PATCH request to update the user status.

### ⚠️ Error and Success Handling
- Displays error messages for failed API calls and success messages for completed actions like deletions or status updates, enhancing the user experience.

### 📊 Dynamic Table
- The table updates dynamically based on filtered data and pagination, allowing seamless interaction.

### 📝 Form Handling & Validation
- Forms (e.g., eligibility check, registration) are built with Formik for efficient management, and Yup is used for validation.

### ✔️ Eligibility Determination
- Users can enter their information to check eligibility for various health insurance plans, with results displayed dynamically based on backend data.

### 📈 Dynamic and Modular Dashboard
- **Correspondence Dashboard**: Displays real-time statistics such as total triggers, pending triggers, and successful triggers.
- **Admin Dashboard**: Provides a management view for handling caseworkers, policies, and correspondence.

### 🛠️ Component-based Design
- The application utilizes reusable components for a clean and maintainable structure, including an expandable sidebar for navigation.

### 🔗 State Management & API Integration
- Axios is used for API calls, and state management is handled with React’s useState or context API for smooth data flow.

### 📧 PDF and Email Integration (Scheduler)
- Functionality for automated PDF report generation and email sending via a scheduler, with frontend components to trigger or display statuses.

### ➕ Expandable Sidebar Navigation
- The sidebar features a parent-child structure, allowing users to navigate through modules like “Data Collection” and “Admin,” enhancing usability while maintaining a clean interface.

## Installation

To run the PolicyPal frontend application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VenuGopalPattem1/PolicyPal-Insurance-React-Frontend.git
