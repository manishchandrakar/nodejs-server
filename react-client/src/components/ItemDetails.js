// ItemDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './ItemDetails.css'; // Import the CSS file

const ItemDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Update the URL with the correct endpoint for fetching product details
    axios.get('http://localhost:5000/') // Replace with the actual endpoint
      .then(response => {
        console.log('Data received:', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, []);

  const handleDelete = async (productId) => {
    try {
      console.log(`http://localhost:5000/${productId}`);
      console.log('Deleting product with ID:', productId);
      await axios.delete(`http://localhost:5000/${productId}`);
      console.log('Product deleted successfully');

      // Refresh the product list after deletion
      const updatedProducts = products.filter(product => product._id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error.response ? error.response.data : error.message);
    }
  };

  if (products.length === 0) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="container1">
      <h1 style={{ color: '#3498db', textAlign: 'center', width:'90%' }}>Product Details</h1>
      <table className="product-table">
        <thead>
          <tr>
            {/* <th>Product Name</th> */}
            <th>Product ID</th>
            <th>Items</th>
            <th>Price</th>
            <th>Category</th>
            <th>Item Details</th>
            <th>In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              {/* <td>{product.productName}</td> */}
              <td>{product.productId}</td>
              <td>{product.items}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>{product.item_details}</td>
              <td>{product.inStock ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/edit/${product._id}`} className="edit-button">
                  Edit
                </Link>
                <button type="button" onClick={() => handleDelete(product._id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/create" className="create-button">Create New Product</Link>
      </div>
    </div>
  );
};

export default ItemDetails;
