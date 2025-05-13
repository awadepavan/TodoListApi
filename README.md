# 📝 TodoList API

A simple and lightweight RESTful API for managing a to-do list. This project is built using **Node.js**, **Express.js**, and **MongoDB**, and follows the CRUD operations (Create, Read, Update, Delete).

## 🔧 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling tool
- **dotenv** – Environment variable management
- **Nodemon** – Auto-restarts the server on file changes (for development)

## 🚀 Features

- ✅ Add a new todo
- 📋 Get all todos
- 📄 Get a single todo by ID
- ✏️ Update a todo
- ❌ Delete a todo

## 📁 Project Structure

TodoListApi/
│
├── config/ # MongoDB configuration
│ └── db.js
│
├── controllers/ # Logic for handling requests
│ └── todoController.js
│
├── models/ # Mongoose schema for Todo
│ └── Todo.js
│
├── routes/ # API routes
│ └── todoRoutes.js
│
├── .env # Environment variables (PORT, MONGO_URI)
├── .gitignore
├── package.json
├── server.js # Main entry point
└── README.md



## 🛠️ Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/awadepavan/TodoListApi.git
   cd TodoListApi
Install dependencies
     npm install

Add your MongoDB URI
PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the server
npm start

📬 API Endpoints

GET	-- /api/todos ---	Get all todos||
GET --	/api/todos/:id ---	Get a todo by ID||
POST --	/api/todos ---	Create a new todo||
PUT--	/api/todos/:id ---	Update a todo||
DELETE---	/api/todos/:id ---	Delete a todo
