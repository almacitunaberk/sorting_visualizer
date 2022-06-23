import React from 'react';
import { useState } from 'react';
import './Header.css';

const Header = ({ handleArrayGenerate, handleBarNumberChange }) => {
  const [arraySize, setArraySize] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBarNumberChange(arraySize);
  };
  return (
    <header className="header">
      <h3 className="header__array-generate-button" onClick={handleArrayGenerate}>
        Generate Array
      </h3>
      <form onSubmit={handleSubmit} className="header__form">
        <input
          typeof="number"
          className="header__input"
          placeholder="How many bars should be sorted?"
          onChange={(e) => {
            setArraySize((prev) => {
              return e.target.value;
            });
          }}
        ></input>
      </form>
    </header>
  );
};

export default Header;
