import React, { useState } from 'react';
import axios from 'axios';
import './NewProductForm.css'; // Adjust the file path accordingly

const NewProductForm = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    productId: '',
    items: '',
    price: '',
    category: '',
    item_details: '',
    inStock: true,
  });

  // State for showing/hiding the popup
  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to your backend to save the new product
      await axios.post('http://localhost:5000/create', formData);

      // Clear the form after successful submission
      setFormData({
        productId: '',
        items: '',
        price: '',
        category: '',
        item_details: '',
        inStock: true,
      });

      // Show the popup
      setShowPopup(true);

      // You can also redirect the user or perform any other actions here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Function to close the popup
  const closePopup = () => {
    // Hide the popup
    setShowPopup(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Product ID:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="productId"
                  value={formData.productId}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Items:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="items"
                  value={formData.items}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Price:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Category:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Item Details:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="item_details"
                  value={formData.item_details}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>In Stock:</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      inStock: !formData.inStock,
                    })
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit">Submit</button>
      </form>
                  

      {/* Popup */}
      {showPopup && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content">
            <p>Product created successfully!</p>
            <a href="/" onClick={closePopup}>
              Go to Home
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProductForm;
