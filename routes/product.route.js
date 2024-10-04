const express = require("express");
const productRoute = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const {
  create,
  getProducts,
  updateProduct,
  deleteProduct,
  oneProduct,
} = require("../controllers/product.controllers");

productRoute.post("/products", authMiddleware, create);
productRoute.get("/products", getProducts);
productRoute.get("/products/:id", oneProduct);
productRoute.put("/products/:id", authMiddleware, updateProduct);
productRoute.delete("/products/:id", authMiddleware, deleteProduct);

module.exports = productRoute;
