import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
      <div className="topnav">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
      </nav>
    </header>
  );
};

export default Header;
