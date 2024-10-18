import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2>Search/Filter</h2>
      <div className="filter-section">
        <h3>Price</h3>
        <input type="range" min="0" max="5000" />
      </div>
      <div className="filter-section">
        <h3>Categories</h3>
        <div>
          <input type="checkbox" id="tab" />
          <label htmlFor="tab">Tab</label>
        </div>
        <div>
          <input type="checkbox" id="laptop" />
          <label htmlFor="laptop">Laptop</label>
        </div>
        <div>
          <input type="checkbox" id="mobile" />
          <label htmlFor="mobile">Mobile</label>
        </div>
      </div>
      <div className="filter-section">
        <h3>Rating</h3>
        {/* Example of star ratings filter */}
        <div className="star-rating">
          <span>⭐⭐⭐⭐⭐</span>
          <span>⭐⭐⭐⭐</span>
          <span>⭐⭐⭐</span>
          {/* Add more rating options */}
        </div>
      </div>
      {/* Add more filter sections */}
    </aside>
  );
};

export default Sidebar;
