import React from 'react';
import '../index.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="shop-name">Shopify</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
      </ul>
      <div className="nav-right">
        <button className="cart-button">Cart</button>
      </div>
    </nav>
  );
}

export default NavBar;
