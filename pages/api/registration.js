// import mongoose from "mongoose";
import connectDB from "../../lib/mongodb";
import Student from "../../models/student";

export default async function handler(req, res) {
  await connectDB(); // Connect to the database

  if (req.method === "POST") {
    try {
      // Create a new student document from request body
      const newStudent = new Student(req.body);

      // Save the student document to the database
      await newStudent.save();

      // Send success response
      res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
      // Handle errors during saving
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    // Send method not allowed response for other methods
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
