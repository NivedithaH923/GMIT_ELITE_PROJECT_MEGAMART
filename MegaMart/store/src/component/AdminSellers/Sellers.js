import React, { useState, useEffect } from 'react';
import './Sellers.css'; // Import the CSS file

const Sellers = () => {
  const [sellers, setSellers] = useState([]);
  const [newSeller, setNewSeller] = useState('');

  useEffect(() => {
    // Fetch sellers from the backend (mock data for now)
    setSellers([
      { id: 1, name: 'Reliance Trends', active: true },
      { id: 2, name: 'Davangere Furnitures', active: false },
    ]);
  }, []);

  const handleAddSeller = () => {
    const newSellerObj = { id: sellers.length + 1, name: newSeller, active: true };
    setSellers([...sellers, newSellerObj]);
    setNewSeller('');
  };

  const handleDisableSeller = (id) => {
    setSellers(
      sellers.map(seller => seller.id === id ? { ...seller, active: !seller.active } : seller)
    );
  };

  return (
    <div className="sellers-page">
      <h1 className="manage-sellers-heading">Manage Sellers</h1>
      <input 
        type="text" 
        value={newSeller} 
        onChange={(e) => setNewSeller(e.target.value)} 
        placeholder="Enter Seller Name"
      />
      <button onClick={handleAddSeller}>Add Seller</button>

      <ul>
        {sellers.map(seller => (
          <li key={seller.id}>
            {seller.name} - {seller.active ? 'Active' : 'Disabled'}
            <button onClick={() => handleDisableSeller(seller.id)}>
              {seller.active ? 'Disable' : 'Enable'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sellers;
