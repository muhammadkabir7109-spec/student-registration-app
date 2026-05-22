const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const studentRoutes = require('./routes/studentRoutes');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enables cross-origin requests from your frontend link
app.use(express.json()); // Parses incoming JSON payloads

// Routes
app.use('/api/students', studentRoutes);

// Fallback Route
app.get('/', (req, res) => {
    res.json({ message: "Student API is running smoothly..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));