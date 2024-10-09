// src/components/ViewOrders.js
import React, { useState, useEffect } from 'react';
import './ViewOrders.css';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch order data from an API or database
    // For demo, using hardcoded data
    const fetchedOrders = [
      { id: 1, customer: 'John Doe', product: 'Laptop', quantity: 1, total: '$1000', status: 'Shipped' },
      { id: 2, customer: 'Jane Smith', product: 'Phone', quantity: 2, total: '$1200', status: 'Processing' },
      // Add more order objects as needed
    ];
    setOrders(fetchedOrders);
  }, []);

  return (
    <div className="view-orders">
      <h1>View Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewOrders;
