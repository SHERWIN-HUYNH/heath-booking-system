const mongoose = require("mongoose");
const COLLECTION_NAME = "WorkingSchedules"
const DOCUMENT_NAME = "WorkingSchedules"

const WorkingSchedules = new mongoose.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    image: { type: String },
    note: { type: String },
    doctor:{type: mongoose.Schema.Types.ObjectId,ref: "Doctors"},
}, { timestamps: true ,collection: COLLECTION_NAME});

module.exports = mongoose.model(DOCUMENT_NAME, WorkingSchedules);
