const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const products = require("./data/products");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const notFound = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("api is called");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  5000,
  console.log(`app running in ${process.env.NODE_ENV} in port ${PORT}`)
);
