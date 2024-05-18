import React from 'react';
import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>iBots Auto</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
