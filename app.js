// Online Express app running on your hosting platform
import express from "express";
const app = express();

app.get("/getName", (req, res) => {
  const phone = req.query.phone;
 
  const name = phone === "8006183088" 
  ? "John Doe" 
  : phone === "9976513631" 
    ? "sandy" 
    : "Unknown";

  res.json({ name });
});

app.listen(3000, () => {
  console.log("Express app listening on port 3000");
});
