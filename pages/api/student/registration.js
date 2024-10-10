// pages/api/registration.js
import mongoDB from "@/lib/mongodb";
import Student from "@/models/student";

export default async function handler(req, res) {
  await mongoDB(); // Connect to the database

  if (req.method === "POST") {
    try {
      const {
        firstName,
        middleName,
        lastName,
        email,
        mobileNumber,
        address,
        city,
        stateProvince,
        zipCode,
        dateOfBirth,
        course,
      } = req.body;

      // Validate request body
      if (
        !firstName ||
        !lastName ||
        !email ||
        !mobileNumber ||
        !address ||
        !dateOfBirth ||
        !course ||
        !city ||
        !stateProvince ||
        !zipCode
      ) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required" });
      }

      // Create a new student document
      const newStudent = new Student({
        firstName,
        middleName,
        lastName,
        email,
        mobileNumber,
        address,
        city,
        stateProvince,
        zipCode,
        dateOfBirth,
        course,
      });

      // Save the student document to the database
      await newStudent.save();

      // Send a success response
      res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
      console.error("Error saving student:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
