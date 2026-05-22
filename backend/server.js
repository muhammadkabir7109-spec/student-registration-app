const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const studentRoutes = require('./routes/studentRoutes');

// Load configurations
dotenv.config();

// Access MongoDB Server
connectDB();

const app = express();

// Global Middleware Configs
app.use(cors());
app.use(express.json());

// Main App API Routes
app.use('/api/students', studentRoutes);

// Fallback Route Endpoint Verification
app.get('/', (req, res) => {
    res.json({ message: "Student API is running smoothly..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server executing safely on port ${PORT}`));