import connectDB from "../../lib/mongodb";
import Student from "../../models/student"; // Ensure the correct casing for import

export default async function registration(req, res) {
  await connectDB(); // Connect to the database

  if (req.method === "POST") {
    try {
      // Validate request body if needed
      // For example, you could check for required fields

      const {
        firstName,
        middleNmae,
        lastName,
        email,
        mobileNumber,
        dateOfBirth,
        course,
        address,
        city,
        stateProvince,
        zipCode,
      } = req.body;

      // Example validation (you can enhance this with a library)
      if (
        !firstName ||
        !lastName ||
        !middleNmae ||
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

      // Create a new student document from request body
      const newStudent = new Student(req.body);

      // Save the student document to the database
      await newStudent.save();

      // Send success response
      res.status(201).json({ success: true, data: newStudent });
    } catch (error) {
      // Handle errors during saving
      console.error("Error saving student:", error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    // Send method not allowed response for other methods
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
