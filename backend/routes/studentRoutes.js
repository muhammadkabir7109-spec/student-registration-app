const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

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
        // CHANGE THIS:
        // const students = await studentRoutes = await Student.find();

        // TO THIS:
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;