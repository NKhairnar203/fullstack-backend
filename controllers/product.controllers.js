const Product = require("../models/product.model.js");

const create = async (req, res) => {
  const { user, name, price, category, description, stock, image } = req.body;

  try {
    const Create = await Product.create({
      user,
      name,
      price,
      category,
      description,
      stock,
      image,
    });

    res.status(201).json({Create});
  } catch (error) {
    return res.status(500).json({ message: "Error creating product" });
  }
};

const getProducts = async (req, res) => {
  try {
    const get = await Product.find();

    res.status(201).json({ Data: get });
  } catch (error) {
    return res.status(500).json({ message: "Error creating product" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const update = await Product.findByIdAndUpdate({ _id: id }, req.body);

    res.status(201).json({ Data: update });
  } catch (error) {
    return res.status(500).json({ message: "Error creating product" });
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const update = await Product.findByIdAndDelete({ _id: id });

    res.status(201).json({ Data: update });
  } catch (error) {
    return res.status(500).json({ message: "Error creating product" });
  }
};

const oneProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const one = await Product.findOne({ _id: id });

    res.status(201).json({ Data: one });
  } catch (error) {
    return res.status(500).json({ message: "Error product" });
  }
};

module.exports = { create, getProducts, updateProduct, deleteProduct,oneProduct };
