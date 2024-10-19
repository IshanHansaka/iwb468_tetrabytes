import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
      <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">Shop</a>
  <a href="#contact">Cart</a>
  <a href="#login">Login</a>
  <a href="#login">Register</a>
  <input type="text" placeholder="Search.."></input>
</div>
      </nav>
    </header>
  );
};

export default Header;
