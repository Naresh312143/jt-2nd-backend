const express = require("express");
const { config } = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");
const favouritesRoutes = require("./routes/favouriteRoutes");
config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Product Routes
app.use("/api/products", productRoutes);

// Cart Routes
app.use("/api/cart", cartItemRoutes);

// Favourites Routes
app.use("/api/favourites", favouritesRoutes);

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
