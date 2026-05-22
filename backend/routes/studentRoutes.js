const express = require('express');
const router = express.Router();
const Student = require('../models/students'); // Verified completely lowercase for Linux systems

// @desc    Create a new student record
// @route   POST /api/students
router.post('/', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc    Get all student records
// @route   GET /api/students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find(); // Cleared syntax errors assignment typo
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;