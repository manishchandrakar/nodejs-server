const mongoose = require('mongoose');

// Define the schema for the e-commerce product
const productSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    items: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    item_details: { type: String, required: true },
    inStock: { type: Boolean, required: true }
});

// Create a Mongoose model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;