const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      email: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    patientId: {
      type: String,
      default: null,
    },
    adminId: {
      type: String,
      default: null,
    },
    doctorId: {
      type: String,
      default: null,
    },
    validated: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
