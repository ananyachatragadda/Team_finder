
require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');



const app = express();



// Middleware

app.use(express.json());

app.use(cors());



// --- DATABASE CONNECTION ---

const MONGO_URI = "mongodb://127.0.0.1:27017/campusTeams";



mongoose.connect(MONGO_URI, {

    serverSelectionTimeoutMS: 5000

})

.then(() => console.log("✅ REAL Connection Established to 127.0.0.1!"))

.catch(err => console.log("❌ Connection Error: ", err.message));



// --- STUDENT MODEL ---

const studentSchema = new mongoose.Schema({

    name: String,

    skill: String,

    year: String

});



const Student = mongoose.model('Student', studentSchema);



// --- ROUTES ---



// 1. Get all students

app.get('/api/students', async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

});



// 2. Add a new student

app.post('/api/students', async (req, res) => {

    try {

        const newStudent = new Student(req.body);

        await newStudent.save();

        res.status(201).json(newStudent);

    } catch (err) {

        res.status(400).json({ error: err.message });

    } // <--- Added this missing closing bracket!

});
// ... (Your previous GET and POST routes are above here)

// 2. Add a new student
app.post('/api/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 
});

// --- 🟢 ADD THIS NEW DELETE ROUTE HERE ---
app.delete('/api/students', async (req, res) => {
    try {
        // This command tells MongoDB to delete every document in the collection
        await Student.deleteMany({}); 
        res.status(200).json({ message: "All profiles cleared successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// ----------------------------------------

// --- START SERVER ---
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});