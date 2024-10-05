graph TD
    subgraph Client Layer
        A[React Application]
    end

    subgraph API Gateway
        B[Spring Cloud API Gateway]
    end

    subgraph Service Discovery
        C[Eureka Server]
    end

    subgraph Configuration Management
        D[Config Server]
    end

    subgraph Monitoring
        E[Admin Server]
    end

    subgraph Authentication
        F[Auth Server]
    end

    subgraph Microservices
        G[Application Registration Module]
        H[Data Collection Module]
        I[Eligibility Determination Module]
        J[Correspondence Module]
        K[Benefit Issuance Module]
        L[Reports Module]
        M[Admin Module]
    end

    subgraph Database Layer
        N[(MySQL Database)]
    end

    subgraph Supporting Tools
        O[Swagger]
        P[Postman]
        Q[Java Mail Sender]
        R[iText/OpenPDF]
        S[Apache POI]
        T[Spring Batch & Scheduling]
    end

    A --> B
    B --> C
    B --> F
    B --> G
    B --> H
    B --> I
    B --> J
    B --> K
    B --> L
    B --> M
    G --> N
    H --> N
    I --> N
    J --> N
    K --> N
    L --> N
    M --> N
    C --> G
    C --> H
    C --> I
    C --> J
    C --> K
    C --> L
    C --> M
    D --> G
    D --> H
    D --> I
    D --> J
    D --> K
    D --> L
    D --> M
    E --> G
    E --> H
    E --> I
    E --> J
    E --> K
    E --> L
    E --> M
    F --> B
    G --> O
    G --> P
    J --> Q
    J --> R
    K --> S
    K --> T
