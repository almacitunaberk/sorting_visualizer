import React from 'react';
import './Header.css';

const Header = ({ handleArrayGenerate, handleBarNumberChange }) => {
  return (
    <header className="header">
      <h3 className="header__array-generate-button" onClick={handleArrayGenerate}>
        Generate Array
      </h3>
      <input
        typeof="number"
        className="header__input"
        placeholder="How many bars should be sorted?"
        onChange={(e) => handleBarNumberChange(e.target.value)}
      ></input>
    </header>
  );
};

export default Header;
