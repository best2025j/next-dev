import mongoose from "mongoose";

// Define Mongoose Schema
const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Improved email regex for validation
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Example regex for 10-digit mobile numbers
  },
  address: { type: String },
  course: { type: String, required: true },
  city: { type: String, required: true },
  stateProvince: { type: String, required: true },
  zipCode: { type: String, required: true },
  dateOfBirth: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value < new Date(); // Date must be in the past
      },
      message: "Date of birth must be in the past.",
    },
  }, // Use a single Date field for birth date
});

// Create the Student model
const student =
  mongoose.models.student || mongoose.model("student", studentSchema);

export default student;
