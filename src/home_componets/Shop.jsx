import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // You can implement filter logic here or call API
    alert(`Searching for: ${searchText}`);
  };

  return (
    <>
      <div className='shopSection'>
        <h2>Shop Health Products</h2>
        
        <div className='shopflex'>
          <input
            className='shopSearch'
            type="text"
            placeholder='Search for products...'
            value={searchText}
            onChange={handleInputChange}
          />
          <button className='searchbtn' onClick={handleSearch}>Search</button>
        </div>

        <div className='productGrid'>
          <div className='productCard'>
            <img src="/images/nebulizer.jpg" alt="Omron Nebulizer" />
            <h3>Omron Nebulizer</h3>
            <p>₹ 2199</p>
            <button className='addCartBtn'>Add to Cart</button>
          </div>

          <div className='productCard'>
            <img src="/images/bp-monitor.jpg" alt="Blood Pressure Monitor" />
            <h3>Blood Pressure Monitor</h3>
            <p>₹ 1499</p>
            <button className='addCartBtn'>Add to Cart</button>
          </div>

          <div className='productCard'>
            <img src="/images/thermometer.jpg" alt="Digital Thermometer" />
            <h3>Digital Thermometer</h3>
            <p>₹ 299</p>
            <button className='addCartBtn'>Add to Cart</button>
          </div>

          <div className='productCard'>
            <img src="/images/pulse-oximeter.jpg" alt="Pulse Oximeter" />
            <h3>Pulse Oximeter</h3>
            <p>₹ 399</p>
            <button className='addCartBtn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
