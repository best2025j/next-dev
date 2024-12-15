import mongoose from "mongoose";

// Define Mongoose Schema
const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true }, // Automatically trims whitespace
  middleName: { type: String, trim: true },
  lastName: { type: String, required: true, trim: true },
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
  address: { type: String, trim: true }, // Added trim for address
  course: { type: String, required: true, trim: true }, // Added trim for course
  city: { type: String, required: true, trim: true }, // Added trim for city
  stateProvince: { type: String, required: true, trim: true }, // Added trim for stateProvince
  zipCode: { type: String, required: true, trim: true }, // Added trim for zipCode
  dateOfBirth: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return value < new Date(); // Date must be in the past
      },
      message: "Date of birth must be in the past.",
    },
  },
});

// Create the Student model
const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
