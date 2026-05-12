# Sajeda Student API

A simple REST API built with Node.js and Express for managing student profile information.

## Project Information

- **Project Name:** Sajeda Student API
- **Author:** Sajeda Sultana
- **Technology:** Node.js, Express.js
- **University:** Feni University

---

## Features

- Home route
- Student profile API
- Server status API
- JSON response handling

---

## Installation

### Step 1: Clone the project

```bash
git clone <your-repository-link>

cd sajeda-student-portal
npm install
npm start
http://localhost:3000
GET /
Welcome to Sajeda Student Information Server
{
  "success": true,
  "generatedAt": "2026-05-13T10:00:00.000Z",
  "profile": {
    "id": "232031053",
    "name": "Sajeda Sultana",
    "department": "Computer Science and Engineering",
    "university": "Feni University",
    "currentSemester": "3rd Semester",
    "programmingSkills": [
      "JavaScript",
      "C Programming",
      "HTML"
    ]
  }
}

GET /api/v1/server-status
{
  "message": "Server is active",
  "runningPort": 3000
}
