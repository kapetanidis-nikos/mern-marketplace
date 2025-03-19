const express = require("express");
const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController")

const router = express.Router();

router.route("/").post(productController.createProduct);

router
  .route("/:id")
  .get(authController.protect, productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
