🧠 Backend Developer Intern Assignment
Scalable REST API with Authentication, Roles & Tasks

Full-Stack MERN Deployment (Render + Vercel)

📌 Project Overview

This project was developed as part of the Backend Developer Intern Assignment to demonstrate the ability to:

Design secure, scalable backend APIs

Implement JWT authentication & role-based access

Build CRUD operations for a secondary entity (Tasks)

Create a basic frontend UI to interact with APIs

Deploy a production-ready full-stack application

🚀 Live Deployment
🔗 Frontend (Vercel)

https://task-manager-backend-intern.vercel.app

🔗 Backend API (Render)

https://task-manager-backend-intern.onrender.com/api/v1

📘 Swagger API Docs

https://task-manager-backend-intern.onrender.com/api-docs

🏗️ Tech Stack
Backend

Node.js + Express.js

MongoDB (Mongoose)

JWT Authentication

bcrypt password hashing

Swagger API Documentation

REST API Versioning (/api/v1)

CORS, validation & error handling

Deployed on Render

Frontend

React.js (Vite)

Axios API integration

JWT token storage

Protected dashboard

Task CRUD UI

Deployed on Vercel

🔐 Core Features Implemented
✅ Authentication & Security

User registration & login

Hashed passwords using bcrypt

JWT token generation & verification

Protected routes requiring valid token

Role-based structure ready (user/admin)

✅ Task CRUD APIs

Create task

Get all tasks

Delete task

Secure access via JWT

✅ API Quality & Architecture

RESTful API structure

Proper HTTP status codes

Centralized error handling

Request validation

Scalable folder structure

API versioning (/api/v1)

✅ Frontend Functionality

Register & Login UI

JWT stored in localStorage

Redirect to protected dashboard

Create & delete tasks

Error handling from backend responses

📂 Project Structure
backend/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 ├── config/
 └── server.js

frontend/
 ├── src/
 │   ├── pages/
 │   ├── components/
 │   ├── services/
 │   └── App.jsx

⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/<your-username>/task-manager-backend-intern.git
cd task-manager-backend-intern

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key


Run backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

🔒 Security Practices

Password hashing with bcrypt

Secure JWT authentication

Protected API routes

Input validation & sanitization

Environment variable configuration

CORS handling for production

📈 Scalability Considerations

This architecture is designed for scalability:

Modular MVC structure

Easy migration to microservices

Ready for Redis caching

Supports Docker containerization

Can integrate load balancers & CI/CD

🧪 API Testing

You can test APIs via:

Swagger UI

Postman collection

Frontend dashboard

📦 Deliverables Completed

✅ Hosted backend with working APIs
✅ JWT authentication & role structure
✅ CRUD operations for tasks
✅ React frontend connected to APIs
✅ Swagger documentation
✅ Production deployment
✅ Scalable architecture

👨‍💻 Author

Kumar Manglam
Backend Developer Intern Candidate
