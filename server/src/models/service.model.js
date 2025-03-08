const mongoose = require("mongoose");
const COLLECTION_NAME = "Services"
const DOCUMENT_NAME = "Serivice"

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    image: { type: String },
    price:{type: Number, required: true},
    note: { type: String },
    service:{type: mongoose.Schema.Types.ObjectId, ref: "Faculties"}
}, { timestamps: true ,collection: COLLECTION_NAME});

module.exports = mongoose.model(DOCUMENT_NAME, ServiceSchema);
