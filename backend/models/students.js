const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    school: { type: String, required: true },
    level: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, // Note: In production, hash passwords using bcrypt
    terms: { type: Boolean, required: true },
    paymentMethod: { type: String, required: true }
}, {
    timestamps: true // Automatically handles createdAt and updatedAt timestamps
});

module.exports = mongoose.model('Student', studentSchema);