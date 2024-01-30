// src/OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [itemFields, setItemFields] = useState({
    id: '',
    name: '',
    amount: 0,
    price: 0,
  });

  const handleItemChange = (e) => {
    setItemFields({
      ...itemFields,
      [e.target.name]: e.target.value,
    });
  };

  const addItem = () => {
    setItems([...items, itemFields]);
    setItemFields({
      id: '',
      name: '',
      amount: 0,
      price: 0,
    });
  };

  const calculateTotalAmount = () => {
    const total = items.reduce((acc, item) => acc + item.amount * item.price, 0);
    setTotalAmount(total);
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/orders', { items, totalAmount });
      console.log('Order placed successfully!');
    } catch (error) {
      console.error('Error posting order:', error);
    }
  };

  return (
    <div>
      <h2>Order Form</h2>
      <div>
        <label htmlFor="id">Item ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={itemFields.id}
          onChange={handleItemChange}
        />
      </div>
      <div>
        <label htmlFor="name">Item Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={itemFields.name}
          onChange={handleItemChange}
        />
      </div>
      <div>
        <label htmlFor="amount">Item Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={itemFields.amount}
          onChange={handleItemChange}
        />
      </div>
      <div>
        <label htmlFor="price">Item Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={itemFields.price}
          onChange={handleItemChange}
        />
      </div>
      <button onClick={addItem}>Add Item</button>
      <div>
        <h3>Order Items</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - Amount: {item.amount} - Price: {item.price}
            </li>
          ))}
        </ul>
        <p>Total Amount: {totalAmount}</p>
      </div>
      <button onClick={calculateTotalAmount}>Calculate Total</button>
      <button onClick={handleSubmit}>Place Order</button>
    </div>
  );
};

export default OrderForm;
