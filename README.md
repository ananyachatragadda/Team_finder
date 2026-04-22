Campus Team Finder (MERN Stack)
Project Overview
Project Title: Campus Team Finder

Level: Intermediate

Stack: MERN (MongoDB, Express.js, React/Frontend JS, Node.js)

This project is a full-stack web application designed to solve a common problem for B.Tech students: finding the right teammates for academic projects. It demonstrates skills in building RESTful APIs, managing NoSQL databases with MongoDB, and creating a modern, responsive user interface with a "Soft Lavender" aesthetic.

Objectives
Develop a Full-Stack CRUD Application: Create an end-to-end system to Create, Read, and Delete student profiles.

Database Management: Use MongoDB to store and retrieve student data (Name, Skill, Year) efficiently.

Real-Time Search Functionality: Implement client-side filtering to help users find teammates based on specific skills instantly.

UI/UX Design: Design a centered landing page and a grid-based dashboard using professional CSS techniques.

Project Structure
1. Database & Backend Setup
Database: Uses MongoDB (local) to store student information via Mongoose schemas.

Server: Built with Express.js to handle API requests and JSON middleware.

JavaScript
// Student Schema in MongoDB
const studentSchema = new mongoose.Schema({
    name: String,
    skill: String,
    year: String
});

const Student = mongoose.model('Student', studentSchema);
2. Frontend Development (Soft Lavender Theme)
Centered Landing Page: Uses Flexbox to ensure the "Join the Team" form is perfectly centered for a clean user experience.

Grid Dashboard: Uses CSS Grid to display teammate cards with a gap of 30px for better readability.

Responsive Badges: Each skill is highlighted with a custom-styled badge to improve visual hierarchy.

3. Data Analysis & API Logic
The following logic was developed to ensure a smooth flow between the user and the database:

Post Student Data: Saves a new student profile to the MongoDB collection.

Fetch All Students: Retrieves all stored profiles to populate the team grid.

Search Logic: A real-time event listener filters cards based on the "Skill" input without reloading the page.

Database Cleanup: A dedicated route to clear all profiles for administrative management.

JavaScript
// Example: Real-time Search Logic in main.js
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
    });
});
Findings & UI Highlights
User Onboarding: The centered form design significantly reduces user distraction compared to standard top-aligned forms.

Modern Palette: The Soft Lavender (#f5f3ff) and Purple (#8b5cf6) combination provides a professional "SaaS" feel that is easy on the eyes.

Data Persistence: Even after a browser refresh, all teammate profiles remain securely stored in the MongoDB database.

Reports & Deliverables
Live Demo Ready: A fully functional frontend-to-backend connection.

Clean Codebase: Separated concerns with dedicated css/, js/, and index.js files.

API Documentation: Clear endpoints for GET, POST, and DELETE operations.

Conclusion
This project serves as a comprehensive showcase of MERN stack fundamentals. It bridges the gap between simple static websites and dynamic, database-driven applications. The project successfully implements a clean UI, a functional backend, and a real-world use case for university students.

checkout my linkedin
LinkedIn: www.linkedin.com/in/ananya-chatragadda-52257b2b6 

 
