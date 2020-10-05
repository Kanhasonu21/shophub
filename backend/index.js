import express from "express";
import dotenv from "dotenv";
import products from "./products.js";
import connectDB from './config/db.js '
dotenv.config();
connectDB()
const PORT = process.ENV || 5000;
const app = express();
app.get("/", (req, res) => {
  res.send("Server is Up");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/product/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.listen(PORT, console.log(`Server started on port ${PORT}`));
