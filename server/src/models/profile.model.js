const mongoose = require("mongoose");
const { Gender } = require("./enum");

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, enum: Object.values(Gender), default: Gender.MALE },
  allergies: { type: String },
  symptom: { type: String, required: true },
  birthDate: { type: Date },
  pastMedicalHistory: { type: String },
  identificationType: { type: String },
  identificationNumber: { type: String },
  identificationDocumentUrl: { type: String },
  isDeleted: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Profile", ProfileSchema);
