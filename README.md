# 🚀 Backend Developer Intern Assignment  
### Scalable REST API with Authentication, Roles & Tasks  
**Full-Stack MERN Deployment (Render + Vercel)**

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-darkgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Deployment](https://img.shields.io/badge/Deploy-Render%20%7C%20Vercel-black)

---

# 📌 Project Overview

This project was built as part of a **Backend Developer Intern Assignment**  
to demonstrate the ability to design **secure, scalable backend systems**  
with a **basic frontend UI** for interaction.

The application includes:

- 🔐 JWT Authentication & Authorization  
- 👥 Role-based access control (User / Admin)  
- 📋 CRUD operations for Tasks  
- 📚 Swagger API documentation  
- ☁️ Full deployment (Render + Vercel)

---

# 🏗️ Project Structure

task-manager-backend-intern/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── services/
│ │ └── App.jsx
│ └── index.html
│
└── README.md


---

# ⚙️ Tech Stack

## Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt Password Hashing
- Swagger API Docs

## Frontend
- React.js
- Axios
- React Router
- Simple protected dashboard UI

## Deployment
- **Backend:** Render  
- **Frontend:** Vercel  

---

# 🔐 Core Features

### Authentication
- User registration
- Secure password hashing
- JWT login & token verification

### Authorization
- Role-based access (User / Admin)
- Protected routes using middleware

### Task Management
- Create task  
- Get all tasks  
- Delete task  

### API Quality
- RESTful design  
- Proper status codes  
- Input validation  
- Centralized error handling  
- API versioning (`/api/v1`)  

---

# 📸 Demo Flow

1. Register a new user  
2. Login to receive **JWT token**  
3. Access protected **Dashboard**  
4. Create & delete tasks  
5. Logout securely  

All protected routes require **valid JWT authentication**.

---

# 🌐 Live Deployment

### Backend API
👉 https://task-manager-backend-intern.onrender.com/api/v1

### Frontend App
👉 https://task-manager-backend-intern.vercel.app

### Swagger Docs
👉 https://task-manager-backend-intern.onrender.com/api-docs

---

# 🧪 API Endpoints

## Auth
- `POST /auth/register`
- `POST /auth/login`

## Tasks (Protected)
- `GET /tasks`
- `POST /tasks`
- `DELETE /tasks/:id`

JWT token required in:

Authorization: Bearer <token>


---

# 💻 Local Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/KumarManglam-123/task-manager-backend-intern.git
cd task-manager-backend-intern
2️⃣ Backend Setup
cd backend
npm install
Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
Run backend:

npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔒 Security Practices
Password hashing using bcrypt

JWT token authentication

Protected API routes via middleware

Input validation & error handling

Environment variables for secrets

📈 Scalability Notes
This project is structured for real-world scalability:

Modular MVC backend architecture

Middleware-based auth & validation

API versioning support

Easily extendable to:

Redis caching

Microservices

Load balancing

Docker deployment

👨‍💻 Author
Kumar Manglam

📧 Email: kmanglam2003@gmail.com

🔗 GitHub: https://github.com/KumarManglam-123



