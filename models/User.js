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
    userType: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    isDoctor: {
      type: Boolean,
      default: false
    },
    validated: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
