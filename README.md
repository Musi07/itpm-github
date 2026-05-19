# 🎓 Student Profile & Todo Application API

## 📌 Overview

This project was developed as part of the IT Project Management (ITPM) course.  
It demonstrates how to build a complete RESTful API using Node.js and Express.js.

The project includes:

- Student profile API routes
- Complete CRUD operations for Todo management
- JSON formatted API responses
- API testing using Postman

---

# 🚀 Technologies Used

- Node.js
- Express.js
- JSON
- Postman

---

# 📂 Project Structure

```bash
project-folder
│
├── node_modules/
├── screenshots/
│   ├── get-all-todos.png
│   ├── create-todo.png
│   ├── get-single-todo.png
│   ├── update-todo.png
│   └── delete-todo.png
│
├── server.js
├── todos.json
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Musi07/itpm-github.git
```

## 2️⃣ Open the Project Folder

```bash
cd itpm-github
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Run the Server

```bash
node server.js
```

Server will run on:

```bash
http://localhost:3000
```

---

# 🔗 API Endpoints

## 📘 Student Profile Routes

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/api/v1/student` | Get student profile |
| GET    | `/api/v1/status`  | Check server status |

---

## 📝 Todo Application Routes

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| GET    | `/api/v1/todos`     | Get all todos         |
| POST   | `/api/v1/todos`     | Create a new todo     |
| GET    | `/api/v1/todos/:id` | Get single todo by ID |
| PUT    | `/api/v1/todos/:id` | Update todo           |
| DELETE | `/api/v1/todos/:id` | Delete todo           |

---

# 📊 Sample API Responses

## ✅ Student Profile Response

```json
{
  "success": true,
  "profile": {
    "id": "232031053",
    "name": "Sajeda Sultana Syma"
  }
}
```

---

## ✅ Sample Todo Response

```json
{
  "id": 1,
  "title": "Complete API Assignment",
  "completed": false
}
```

---

# 📸 API Testing Screenshots

## 🔹 Get All Todos

![Get All Todos](screenshots/get-all-todos.png)

---

## 🔹 Create Todo

![Create Todo](screenshots/create-todo.png)

---

## 🔹 Get Single Todo

![Get Single Todo](screenshots/get-single-todo.png)

---

## 🔹 Update Todo

![Update Todo](screenshots/update-todo.png)

---

## 🔹 Delete Todo

![Delete Todo](screenshots/delete-todo.png)

---

# ✅ Features Implemented

- RESTful API architecture
- CRUD operations for todos
- JSON data handling
- Dynamic route parameters
- Error handling
- API testing using Postman

---

# 🧪 Testing

All API endpoints were tested successfully using Postman.

Tested operations include:

- Creating todos
- Updating todos
- Deleting todos
- Fetching all todos
- Fetching a single todo

---

# 👩‍💻 Author

### Sajeda Sultana Syma

Student ID: 232031053

---

# 📄 License

This project is created for academic purposes only.
