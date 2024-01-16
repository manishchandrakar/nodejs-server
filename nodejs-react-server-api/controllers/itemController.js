const mongoose = require('mongoose');
const Product = require("../modules/Item.js");

class ItemController {
  async getAllItems(req, res) {
    try {
      console.log("Fetching all items");
      const items = await Product.find({});
      res.json(items);
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createItem(req, res) {
    try {
      console.log("Creating item");
      console.log(req.body);
      const product = await Product.create(req.body);

      if (!product) {
        return res.status(400).json({ error: "Error in Creating Production" });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error("Error creating item:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getItemById(req, res) {
    try {
      const itemId = req.params.id;
      console.log("Id of Item", itemId);
      const item = await Product.findById(itemId);

      if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }

      res.status(200).json(item);
    } catch (error) {
      console.error("Error fetching item by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateItem(req, res) {
    try {
      const itemId = req.params.id;
      const updatedItem = req.body;
  
      console.log('Updating item with ID:', itemId);
      
      const item = await Product.findByIdAndUpdate(itemId, updatedItem, {
        new: true,
      });
  
      if (!item) {
        console.log('Item not found');
        return res.status(404).json({ error: "Item not found" });
      }
  
      console.log('Item updated successfully:', item);
      res.json(item);
      // res.send('Item updated successfully');
    } catch (error) {
      console.error("Error updating item:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  

  async deleteItem(req, res) {
    try {
      const itemId = req.params.id;
  
      if (!mongoose.isValidObjectId(itemId)) {
        return res.status(400).json({ error: "Invalid Item ID" });
      }
  
      const deletedItem = await Product.findOneAndDelete({ _id: itemId });
  
      if (!deletedItem) {
        return res.status(404).json({ error: "Item not found" });
      }
  
      res.json(deletedItem);
    } catch (error) {
      console.error("Error deleting item:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new ItemController();
