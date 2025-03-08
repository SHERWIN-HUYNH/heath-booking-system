const mongoose = require("mongoose");
const COLLECTION_NAME = "Faculties"
const DOCUMENT_NAME = "Faculty"

const FacultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    image: { type: String },
    note: { type: String },
    service:[{type: mongoose.Schema.Types.ObjectId,ref: "Services"}]
}, { timestamps: true ,collection: COLLECTION_NAME});

module.exports = mongoose.model(DOCUMENT_NAME, FacultySchema);
