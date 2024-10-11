export default async function handler(req, res) {
  console.log("Request received:", req.body); // Debugging request data

  if (req.method === "POST") {
    // Your logic here
    res.status(200).json({ message: "Data submitted successfully!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
