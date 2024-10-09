import React, { useState, useEffect } from 'react';
import './Products.css'; // Import the CSS file

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', seller: '' });

  useEffect(() => {
    // Fetch products from backend (mock data)
    setProducts([
      { id: 1, name: 'Mobile Phone', price: 200, category: 'Electronics', seller: 'Reliance Trends', active: true },
      { id: 2, name: 'T-Shirt', price: 20, category: 'Clothing', seller: 'Davangere Furnitures', active: false }
    ]);
  }, []);

  const handleAddProduct = () => {
    const newProductObj = { ...newProduct, id: products.length + 1, active: true };
    setProducts([...products, newProductObj]);
    setNewProduct({ name: '', price: '', category: '', seller: '' });
  };

  const handleDisableProduct = (id) => {
    setProducts(
      products.map(product => product.id === id ? { ...product, active: !product.active } : product)
    );
  };

  return (
    <div className="products-page">
      <h1>Manage Products</h1>
      <input 
        type="text" 
        value={newProduct.name} 
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
        placeholder="Enter Product Name"
      />
      <input 
        type="text" 
        value={newProduct.price} 
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
        placeholder="Enter Product Price"
      />
      <input 
        type="text" 
        value={newProduct.category} 
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} 
        placeholder="Enter Category"
      />
      <input 
        type="text" 
        value={newProduct.seller} 
        onChange={(e) => setNewProduct({ ...newProduct, seller: e.target.value })} 
        placeholder="Enter Seller"
      />
      <br></br>
      <button onClick={handleAddProduct}>Add Product</button>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.category} - {product.seller} - {product.active ? 'Active' : 'Disabled'}
            <button onClick={() => handleDisableProduct(product.id)}>
              {product.active ? 'Disable' : 'Enable'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

