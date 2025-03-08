const mongoose = require("mongoose");
const { UserRole } = require("./enum");
const COLLECTION_NAME = "Users"
const DOCUMENT_NAME = "User"

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String },
  phone: { type: String, required: true, unique: true },
  roleName: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
}, { timestamps: true ,collection: COLLECTION_NAME});

module.exports = mongoose.model(DOCUMENT_NAME, UserSchema);
