// EditProduct.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditProduct.css'

const EditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState('');
  const [itemDetails, setItemDetails] = useState('');
  const [inStock, setInStock] = useState(true);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/${productId}`)
      .then(response => {
        console.log('Product details received:', response.data);
        const { category, item_details, inStock, price } = response.data;
        setCategory(category);
        setItemDetails(item_details);
        setInStock(inStock);
        setPrice(price);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [productId]);

  const handleUpdate = async () => {
    try {
      console.log('Updating product:', productId, category, itemDetails, inStock, price);

      const data = await axios.put(`http://localhost:5000/${productId}`, {
        category,
        item_details: itemDetails,
        inStock,
        price,
      });

      console.log('Product updated successfully');

      if (data.ok) {
        // Redirect back to the product details page
        navigate('/');
      }
    } catch (error) {
      console.error('Error updating product:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container">
      <h1>Edit Product</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label htmlFor="itemDetails">Item Details:</label>
          <textarea
            id="itemDetails"
            value={itemDetails}
            onChange={(e) => setItemDetails(e.target.value)}
          />

          <label htmlFor="inStock">In Stock:</label>
          <input
            type="checkbox"
            id="inStock"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <button type="button" onClick={handleUpdate}>
            Update Product
          </button>

          {/* Back to Home link */}
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditProduct;
