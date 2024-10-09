import React, { useState, useEffect } from 'react';
import './Categories.css'; // Import the CSS file

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    // Fetch categories from backend (mock data)
    setCategories([
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' }
    ]);
  }, []);

  const handleAddCategory = () => {
    const newCategoryObj = { id: categories.length + 1, name: newCategory };
    setCategories([...categories, newCategoryObj]);
    setNewCategory('');
  };

  return (
    <div className="categories-page">
      <h1>Manage Categories</h1>
      
      <input 
        type="text" 
        value={newCategory} 
        onChange={(e) => setNewCategory(e.target.value)} 
        placeholder="Enter Category Name"
      />
      <br></br>
      <button onClick={handleAddCategory}>Add Category</button>

      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
