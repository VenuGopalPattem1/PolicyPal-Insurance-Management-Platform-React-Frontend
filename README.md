# PolicyPal - Insurance Management Application
---------------------------------------------------------

## Overview
- **Description:**  
  PolicyPal is a health insurance management system where users can register and apply for available insurance plans.

- **Architecture:**  
  Developed using microservices architecture, the application consists of different modules, each handling specific services to ensure scalability and maintainability.

## Architecture Diagram

```plantuml
@startuml
!define RECTANGLE class
RECTANGLE Client_Layer {
  (React Application)
}

RECTANGLE API_Gateway {
  (Spring Cloud API Gateway)
}

RECTANGLE Service_Discovery {
  (Eureka Server)
}

RECTANGLE Config_Management {
  (Config Server)
}

RECTANGLE Monitoring {
  (Admin Server)
}

RECTANGLE Authentication {
  (Auth Server)
}

RECTANGLE Application_Registration_Module {
  (Application Registration Service)
}

RECTANGLE Data_Collection_Module {
  (Data Collection Service)
}

RECTANGLE Eligibility_Determination_Module {
  (Eligibility Determination Service)
}

RECTANGLE Correspondence_Module {
  (Correspondence Service)
}

RECTANGLE Benefit_Issuance_Module {
  (Benefit Issuance Service)
}

RECTANGLE Reports_Module {
  (Reports Service)
}

RECTANGLE Admin_Module {
  (Admin Service)
}

RECTANGLE MySQL_Database {
  (MySQL Database)
}

Client_Layer --> API_Gateway : REST Calls
API_Gateway --> Service_Discovery : Service Discovery
API_Gateway --> Config_Management : Config Management
API_Gateway --> Monitoring : Monitoring
API_Gateway --> Authentication : Authentication

Service_Discovery --> Application_Registration_Module
Service_Discovery --> Data_Collection_Module
Service_Discovery --> Eligibility_Determination_Module
Service_Discovery --> Correspondence_Module
Service_Discovery --> Benefit_Issuance_Module
Service_Discovery --> Reports_Module
Service_Discovery --> Admin_Module

Application_Registration_Module --> MySQL_Database : CRUD Operations
Data_Collection_Module --> MySQL_Database : CRUD Operations
Eligibility_Determination_Module --> MySQL_Database : CRUD Operations
Correspondence_Module --> MySQL_Database : CRUD Operations
Benefit_Issuance_Module --> MySQL_Database : CRUD Operations
Reports_Module --> MySQL_Database : CRUD Operations
Admin_Module --> MySQL_Database : CRUD Operations

rectangle "Support Tools" {
    O[Swagger]
    P[Postman]
    Q[Java Mail Sender]
    R[OpenPDF]
    S[Apache POI]
}

API_Gateway --> O : API Docs
API_Gateway --> P : API Testing
Application_Registration_Module --> Q : Email Notifications
Eligibility_Determination_Module --> R : PDF Generation
Benefit_Issuance_Module --> S : Excel Generation
@enduml
