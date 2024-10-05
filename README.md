# PolicyPal - Insurance Management Application
---------------------------------------------------------

## Overview
- **Description:**  
  PolicyPal is a health insurance management system where users can register and apply for available insurance plans.

- **Architecture:**  
  Developed using microservices architecture, the application consists of different modules, each handling specific services to ensure scalability and maintainability.

## Architecture Diagram

```mermaid
graph TD
    A[Client Layer] --> B[API Gateway]
    
    B --> C[Eureka Server]
    B --> D[Config Server]
    B --> E[Admin Server]
    B --> F[Auth Server]
    
    C --> G[Application Registration Service]
    C --> H[Data Collection Service]
    C --> I[Eligibility Determination Service]
    C --> J[Correspondence Service]
    C --> K[Benefit Issuance Service]
    C --> L[Reports Service]
    C --> M[Admin Service]

    G --> N[MySQL Database]
    H --> N
    I --> N
    J --> N
    K --> N
    L --> N
    M --> N
    
    subgraph "Support Tools"
        O[Swagger]
        P[Postman]
        Q[Java Mail Sender]
        R[OpenPDF]
        S[Apache POI]
    end
    
    B --> O
    B --> P
    G --> Q
    I --> R
    K --> S
