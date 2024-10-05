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
    A[Client Layer] -->|REST Calls| B[API Gateway]
    B -->|Service Discovery| C[Eureka Server]
    B -->|Config Management| D[Config Server]
    B -->|Monitoring| E[Admin Server]
    B -->|Authentication| F[Auth Server]
    
    C --> G[Application Registration Service]
    C --> H[Data Collection Service]
    C --> I[Eligibility Determination Service]
    C --> J[Correspondence Service]
    C --> K[Benefit Issuance Service]
    C --> L[Reports Service]
    C --> M[Admin Service]

    G -->|CRUD Operations| N[MySQL Database]
    H -->|CRUD Operations| N
    I -->|CRUD Operations| N
    J -->|CRUD Operations| N
    K -->|CRUD Operations| N
    L -->|CRUD Operations| N
    M -->|CRUD Operations| N
    
    subgraph "Support Tools"
        O[Swagger]
        P[Postman]
        Q[Java Mail Sender]
        R[OpenPDF]
        S[Apache POI]
    end
    
    B -->|API Docs| O
    B -->|API Testing| P
    G -->|Email Notifications| Q
    I -->|PDF Generation| R
    K -->|Excel Generation| S
