const express = require('express');

const server = express();
const PORT = 3000;

server.use(express.json());

// Home Route
server.get('/', (req, res) => {
    res.send('Welcome to Sajeda Student Information Server');
});

// Student Information API
server.get('/api/v1/student', (req, res) => {

    const studentData = {
        success: true,
        generatedAt: new Date(),

        profile: {
            id: "232031053",
            name: "Sajeda Sultana",
            department: "Computer Science and Engineering",
            university: "Feni University",
            currentSemester: "3rd Semester",
            programmingSkills: [
                "JavaScript",
                "C Programming",
                "HTML"
            ]
        }
    };

    res.status(200).json(studentData);
});

// Server Status Route
server.get('/api/v1/server-status', (req, res) => {
    res.status(200).json({
        message: "Server is active",
        runningPort: PORT
    });
});

// Start Server
server.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});
