# 🌐 My Portfolio

A **Full Stack Portfolio Website** built with **React, Node.js, Express, and MongoDB**.  
This project showcases my skills, projects, and contact information in a modern, responsive design.

---

## 🚀 Features

- **Frontend (React)**
  - Modern responsive UI
  - Projects showcase section
  - About me & contact form
  - Smooth navigation

- **Backend (Node.js + Express)**
  - REST API for portfolio data
  - MongoDB integration with Mongoose
  - JWT authentication ready (for future enhancements)
  - CORS enabled

- **Database (MongoDB)**
  - Stores portfolio projects
  - Easily extendable for blogs, testimonials, etc.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS (or your styling choice)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Other Tools:** Git, GitHub, dotenv, nodemon

---

## 📂 Project Structure

myportfolio/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # UI Components
│ │ ├── pages/ # Pages (Home, About, Projects, Contact)
│ │ └── App.js
│ └── package.json
│
├── server/ # Node.js backend
│ ├── src/
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # Express routes
│ │ └── index.js # Server entry
│ └── package.json
│
├── .env # Environment variables
├── README.md
└── package.json



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Likhithasphani/myportfolio.git
cd myportfolio


2️⃣ Setup Backend
cd server
npm install
npm run dev


3️⃣ Setup Frontend
cd client
npm install
npm run dev


📡 API Endpoints
GET /api/health → Check API status

GET /api/portfolio → Portfolio details (about + projects)

GET /api/portfolio/projects → List of projects





🖥️ Deployment
Frontend: Vercel / Netlify

Backend: Render / Railway / Heroku

Database: MongoDB Atlas




📬 Contact
👩‍💻 Likhitha Lakshmi
Front End Developer | React & Node.js

GitHub: @Likhithasphani

Email: likhithalakshmi12@gmail.com

