const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, // Product name is required
  },
  price: {
    type: Number,
    required: true, // Price is required
  },
  category: {
    type: String, // Category is optional
    default: "no category",
  },
  description: {
    type: String, // Description is optional
    default: "no description",
  },
  stock: {
    type: Number,
    required: true, // Stock defaults to 0
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Auto-generate created date
  },
  image: {
    type: String, // Image URL is optional
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiqR_gB1aE6SmGpJvgdi6j6MZYtLpcSittA&s",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
