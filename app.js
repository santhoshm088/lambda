// Online Express app running on your hosting platform
import express from "express";
const app = express();

app.get("/getName", (req, res) => {
  const phone = req.query.phone;
  // For example, look up a name based on the phone number.
  // Here we simply return a sample name.
  const name = phone === "9876543210" ? "John Doe" : "Unknown";
  res.json({ name });
});

app.listen(3000, () => {
  console.log("Express app listening on port 3000");
});
