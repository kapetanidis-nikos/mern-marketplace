const express = require("express");

const AppError = require('./utils/appError');

const productRouter = require("./routes/productRoutes");

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/v1/products", productRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
