// Online Express app running on your hosting platform
import express from "express";
const app = express();

app.get("/getName", (req, res) => {
  const phone = req.query.phone;
 
  const name = phone === "9876543210" 
  ? "John Doe" 
  : phone === "9976513631" 
    ? "sandy" 
    : "Unknown";

  res.json({ name });
});

app.listen(3000, () => {
  console.log("Express app listening on port 3000");
});
