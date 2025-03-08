const mongoose = require("mongoose");
const COLLECTION_NAME = "Doctors"
const DOCUMENT_NAME = "Doctor"

const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    image: { type: String },
    note: { type: String },
    schedule:[{type: mongoose.Schema.Types.ObjectId,ref: "WorkingSchedules"}],
    faculty:{type: mongoose.Schema.Types.ObjectId,ref: "Faculties"},
    
    
}, { timestamps: true ,collection: COLLECTION_NAME});

module.exports = mongoose.model(DOCUMENT_NAME, DoctorSchema);
