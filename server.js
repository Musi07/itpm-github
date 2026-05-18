const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Musfiq Student API Server');
});

app.get('/api/v1/student-profile', (req, res) => {
    const studentProfile = {
        status: "success",
        timestamp: new Date(),
        student: {
            studentId: "232031037",
            fullName: "Musfiq Niloy",
            department: "Computer Science and Engineering",
            university: "Feni University",
            semester: "3rd",
            skills: ["JavaScript", "C", "HTML"]
        }
    };

    res.status(200).json(studentProfile);
});


app.get('/api/v1/status', (req, res) => {
    res.json({
        server: "running",
        port: PORT
    });
});
// ===== TODO API START =====

const FILE = "./todos.json";

const readData = () => JSON.parse(fs.readFileSync(FILE));
const writeData = (data) =>
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

// Get all todos
app.get('/api/v1/todos', (req, res) => {
    res.json(readData());
});

// Get single todo
app.get('/api/v1/todos/:id', (req, res) => {
    const todo = readData().find(t => t.id == req.params.id);
    if (!todo) return res.status(404).json({ message: "Not found" });
    res.json(todo);
});

// Create todo
app.post('/api/v1/todos', (req, res) => {
    const data = readData();

    const newTodo = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };

    data.push(newTodo);
    writeData(data);

    res.status(201).json(newTodo);
});

// Update todo
app.put('/api/v1/todos/:id', (req, res) => {
    const data = readData();
    const index = data.findIndex(t => t.id == req.params.id);

    if (index === -1) return res.status(404).json({ message: "Not found" });

    data[index] = { ...data[index], ...req.body };
    writeData(data);

    res.json(data[index]);
});

// Delete todo
app.delete('/api/v1/todos/:id', (req, res) => {
    const data = readData().filter(t => t.id != req.params.id);
    writeData(data);
    res.json({ message: "Deleted successfully" });
});

// ===== TODO API END =====
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
