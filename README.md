# Card Management System

A full-stack card management system built with Next.js for the frontend and Nodejs(NestJS) with Prisma and postgres for the backend. The system provides comprehensive card profile management, request processing, and fee management capabilities.

## Overview

This monorepo project implements a robust card management system with features for creating and managing card profiles, processing card requests, and handling fee configurations. The system is built with modern technologies and follows best practices for both frontend and backend development.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Documentation](#documentation)
- [Testing](#testing)
- [Development Roadmap](#development-roadmap)
- [Contributing](#contributing)
- [Contact](#contact)

## Technology Stack

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

### Backend
- Node.js
- NestJS
- Prisma ORM
- PostgreSQL
- Swagger (for API documentation)

## Key Features

### Frontend Features
- Card profile management interface
- Card request processing system
- Status updates
- Search and filtering capabilities
- Modern, user-friendly interface

### Backend Features
- Fee Management API
- Card Profile Management
- Card Request Processing
- Database Management with PostgreSQL
- API Documentation (Swagger)
- Robust Error Handling
- Modular Architecture

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── public/
│   │   └── styles/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   ├── prisma/
│   │   └── main.ts
│   ├── package.json
│   └── README.md
└── README.md
```

## Prerequisites

- Node.js (version 14.x or higher)
- PostgreSQL
- npm or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/IgnatiusFrancis/CoreInfra.git
```

2. Install Frontend Dependencies:
```bash
cd frontend
npm install
```

3. Install Backend Dependencies:
```bash
cd backend
npm install
```

## Configuration

### Frontend Configuration
Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:2025/api/v1
```

### Backend Configuration
Create a `.env` file in the backend directory:
```env
DATABASE_URL="postgres://user:password@host:port/dbname"
PORT="2025"
JWT_SECRET="your_jwt_secret_key"
SWAGGER_DOC_DESCRIPTION="Card Management API Documentation"
SWAGGER_DOC_TITLE="Card Management API"
SWAGGER_DOC_VERSION=1.0
SWAGGER_MODELS_EXPAND_DEPTH=-1
SWAGGER_PATH=documentation
SWAGGER_SITE_TITLE=API Docs
```

## Usage

### Starting the Frontend
```bash
cd frontend
npm run dev
```
Access the frontend at: http://localhost:3000

### Starting the Backend
```bash
cd backend
npm run start:dev
```
Access the backend at: http://localhost:2025

## Documentation

### API Documentation
- Swagger Localhost: Access the Swagger documentation at http://localhost:2025/documentation#/
- Swagger Production: Link to Swagger Collection [API Documentation](https://coreinfra.onrender.com/documentation#)
- Backend Link: Link to Render Backend [Backend Live](https://coreinfra.onrender.com/api/v1)
- Frontend Link: Link to Vercel Frontend [Backend Live](https://core-infra-psi.vercel.app/)

## Testing

### Backend Tests
```bash
cd backend
# Card Profile Tests
npm run test card-profile.service.spec.ts
npm run test card-profile.controller.spec.ts

# Chat Tests
npm run test card-request.controller.spec.ts
npm run test card-request.service.spec.ts

```

## Development Roadmap

### Planned Features
1. Docker Integration
   - Containerization for easy deployment
   - Docker Compose for service orchestration

2. Performance Optimizations
   - Redis implementation for caching
   - Horizontal scaling capabilities

3. Enhanced Features
   - Advanced search and filtering
   - Batch operations
   - Export functionality

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## Contact

For inquiries, please contact:

- **Name:** Ignatius Francis
- **Email:** obiignatiusfrancis@outlook.com
- **GitHub:** [IgnatiusFrancis](https://github.com/IgnatiusFrancis)
