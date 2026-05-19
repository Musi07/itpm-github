const express = require('express');
const fs = require('fs');
const path = require('path');

const server = express();
const PORT = 3000;

server.use(express.json());

// File path for storing todos
const DATA_FILE = path.join(__dirname, 'todos.json');

// Helper function to read data safely
const readData = () => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            fs.writeFileSync(DATA_FILE, JSON.stringify([]));
            return [];
        }
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Helper function to write data safely
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Home Route
server.get('/', (req, res) => {
    res.send('Welcome to Sajeda Student Information Server');
});

// Student Information API
server.get('/api/v1/student', (req, res) => {
    res.json({
        success: true,
        generatedAt: new Date(),
        profile: {
            id: "232031053",
            name: "Sajeda Sultana Syma"
        }
    });
});

// ==========================================
// TODO APPLICATION API ENDPOINTS (Assignment)
// ==========================================

// 1. GET ALL TODOS
server.get('/api/v1/todos', (req, res) => {
    const todos = readData();
    res.status(200).json(todos);
});

// 2. CREATE A NEW TODO
server.post('/api/v1/todos', (req, res) => {
    const todos = readData();
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = {
        id: Date.now(), // Unique numeric ID
        title: title,
        completed: false
    };

    todos.push(newTodo);
    writeData(todos);
    res.status(201).json(newTodo);
});

// 3. GET SELECTIVE TODO BY ID
server.get('/api/v1/todos/:id', (req, res) => {
    const todos = readData();
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ error: "Todo item not found" });
    }

    res.status(200).json(todo);
});

// 4. UPDATE TODO BY ID
server.put('/api/v1/todos/:id', (req, res) => {
    const todos = readData();
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo item not found" });
    }

    const { title, completed } = req.body;

    if (title !== undefined) todos[todoIndex].title = title;
    if (completed !== undefined) todos[todoIndex].completed = completed;

    writeData(todos);
    res.status(200).json(todos[todoIndex]);
});

// 5. DELETE TODO BY ID
server.delete('/api/v1/todos/:id', (req, res) => {
    const todos = readData();
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo item not found" });
    }

    todos.splice(todoIndex, 1);
    writeData(todos);
    res.status(200).json({ message: "Deleted successfully" });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});