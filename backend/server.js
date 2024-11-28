const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const authMiddleware = require("./middleware/authMiddleware");

dotenv.config();


const app = express();
app.use(
  cors({
    origin: "https://agrofix-assignment.vercel.app/", // Replace with your Vercel frontend URL
    credentials: true, // Allow cookies and headers
  })
);
app.use(express.json());

// Routes
app.use(
  "/api/auth",
  require("./routes/auth.route")
);
app.use("/api/products", require("./routes/products.route"));
app.use("/api/orders",require("./routes/orders.route"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
    await connectDB()
 console.log(`Server running on port ${PORT}`);
})