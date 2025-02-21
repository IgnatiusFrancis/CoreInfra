# Card Management System

A backend system built with NestJS and Prisma, providing APIs for fee management, card profile creation, and card request processing

# Overview

This project implements a robust order management system with real-time chat capabilities, allowing seamless communication between admin users and regular users regarding their orders.

## Table of Contents

- [Key Features](#key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Starting the Server](#starting-the-server)
  - [API Endpoints](#api-endpoints)
- [Documentation](#documentation)
  - [API Documentation](#api-documentation)
- [Testing](#testing)
  - [Unit Tests](#unit-tests)
  - [Integration Tests](#integration-tests)
- [Technical Implementation](#technical-implementation)
- [Nice-to-Have Features (Planned)](#nice-to-have-features-planned)
- [Development Challenges](#development-challenges)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

# Key-Features

- Fee Management: Create and retrieve different fees.
- Card Profile Management: Create card profiles and link them with fees.
- Card Request Handling: Process card requests, check batch uniqueness, and update statuses.
- Database Management: Uses PostgreSQL with Prisma ORM.
- API documentation (Swagger)
- Robust Error Handling: HTTP exceptions for invalid requests
- Modular Architecture: Separation of concerns for fee, card profile, and request services

# Prerequisites

- Node.js: Ensure you have Node.js installed (version 14.x or higher recommended)
- NestJS: Familiarity with the NestJS framework.
- TypeScript: Knowledge of TypeScript.
- Prisma: For ORM with PostgreSQL.
- PostgreSQL: Database for storing data.

# Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IgnatiusFrancis/CoreInfra.git

   ```

# Install dependencies:

- cd into Backend
- npm install

# Configuration

Create a .env file in the root backend directory and configure the following environment variables:

```env
DATABASE_URL="postgres://user:password@host:port/dbname"
PORT="2025"
JWT_SECRET="your_jwt_secret_key"
SWAGGER_DOC_DESCRIPTION=Checkit API Documentation
SWAGGER_DOC_TITLE=Checkit
SWAGGER_DOC_VERSION=1.0
SWAGGER_MODELS_EXPAND_DEPTH=-1
SWAGGER_PATH=documentation
SWAGGER_SITE_TITLE=API Docs

```

# Usage

## Starting the Server

To start the API server, run the following command:

```bash
# Development mode (auto-restarts on file changes)
$ npm run start:dev

# Production mode
$ npm run start:prod

```

# Documentation

## API Documentation

Swagger Localhost: Access the Swagger documentation at http://localhost:2025/documentation#/

Swagger Production: Link to Swagger Collection [API Documentation](https://coreinfra.onrender.com/documentation#)

## Testing

The project includes comprehensive test coverage:

## Unit Tests

Located within each module directory:

```bash
# Card Profile Tests
npm run test card-profile.service.spec.ts
npm run test card-profile.controller.spec.ts

# Chat Tests
npm run test card-request.controller.spec.ts
npm run test chat.controller.spec.ts

```

## integration Tests

Located in the test folder with separate directories for each module:

```bash
# This runs all the tests in test folder
npm run test:e2e

```

## Technical Implementation

Core Requirements Implemented

1.  User Management:
    . Admin and Regular user roles
    . JWT-based authentication
    . Role-based access control

2.  Order Management:
    . Order creation with metadata
    . State transitions (Review → Processing → Completed)
    . Input validation

## Nice-to-Have Features (Planned)

1.  Docker Integration:
    . Containerization for easy deployment
    . Docker Compose for service orchestration
    . Scaling Solutions:

2.  Redis implementation for caching
    . Horizontal scaling capabilities

## Development Challenges

1.  Time Management:
    . Met tight deadlines
    . Balanced feature implementation with testing requirements

2.  Technical Challenges:
    . Ensuring proper state management across the system
    . Maintaining test coverage while adding features

## Contributing

To contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a feature branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Open a pull request.

## Contact

For any inquiries, please reach out to:

- **Name: Ignatius Francis**
- **Email: obiignatiusfrancis@outlook.com**
- **GitHub: IgnatiusFrancis**

```

```
