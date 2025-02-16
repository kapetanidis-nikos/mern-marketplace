const express = require("express");

const productRouter = require("./routes/productRoutes");

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/products", productRouter);

module.exports = app;
