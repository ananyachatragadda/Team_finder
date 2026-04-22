// --- 1. GRAB ELEMENTS FROM HTML ---
const studentForm = document.getElementById('add-student-form'); 
const container = document.getElementById('team-container');
const searchInput = document.getElementById('skill-search');

// --- 2. NAVIGATION LOGIC ---
// This makes your "Skip" and "Back" buttons work
function showPage(pageName) {
    const formPage = document.getElementById('page-form');
    const resultsPage = document.getElementById('page-results');
    
    if (pageName === 'results') {
        formPage.style.display = 'none';
        resultsPage.style.display = 'block';
        fetchStudents(); // Pull fresh data from MongoDB whenever we view results
    } else {
        formPage.style.display = 'block';
        resultsPage.style.display = 'none';
    }
}

// --- 3. FETCH DATA FROM MONGODB ---
// --- 3. FETCH DATA FROM MONGODB ---
async function fetchStudents() {
    try {
        const response = await fetch('http://localhost:5000/api/students');
        const data = await response.json();
        
        container.innerHTML = ""; 
        
        if (data.length === 0) {
            container.innerHTML = "<p>No teammates found in the database yet.</p>";
            return;
        }

        // 🟢 REPLACE YOUR OLD data.forEach WITH THIS CLEAN VERSION:
        data.forEach(student => {
            container.innerHTML += `
                <div class="card">
                    <h2>${student.name}</h2>
                    <p><strong>Year:</strong> ${student.year}</p>
                    <span class="skill-badge">${student.skill}</span>
                </div>`;
        });
        // ----------------------------------------------------------

    } catch (error) {
        console.error("Error loading data:", error);
        container.innerHTML = "<p style='color:red;'>Could not connect to the server.</p>";
    }
}
// --- 4. SUBMIT DATA TO MONGODB ---
studentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const newStudent = {
        name: document.getElementById('name').value,
        skill: document.getElementById('skill').value,
        year: document.getElementById('year').value
    };

    try {
        const response = await fetch('http://localhost:5000/api/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudent)
        });

        if (response.ok) {
            console.log("✅ Data saved to MongoDB!");
            studentForm.reset();
            showPage('results'); // Automatically go to results page
        }
    } catch (error) {
        alert("Failed to save. Make sure your VS Code terminal shows 'Connected'!");
    }
});

// --- 5. SEARCH LOGIC ---
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
    });
});

// Load data on start
fetchStudents();

// ... (Your existing Sections 1, 2, 3, and 4 are above here)

// --- 5. SEARCH LOGIC ---
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
    });
});

// --- 🟢 ADD THE CLEAR FUNCTION HERE ---
async function clearDatabase() {
    if (confirm("⚠️ Are you sure? This will delete all profiles from MongoDB forever!")) {
        try {
            const response = await fetch('http://localhost:5000/api/students', {
                method: 'DELETE' 
            });

            if (response.ok) {
                console.log("🧹 Database cleared!");
                fetchStudents(); // This refreshes the UI to show "No teammates found"
            }
        } catch (error) {
            console.error("Failed to clear database:", error);
            alert("Could not reach the server to clear data.");
        }
    }
}
// --------------------------------------

// Load data on start
fetchStudents();