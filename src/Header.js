import React from 'react';
import { useState } from 'react';
import './Header.css';

const Header = ({ handleArrayGenerate, handleBarNumberChange, handleMergeSort, handleBubbleSort }) => {
  const [arraySize, setArraySize] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBarNumberChange(arraySize);
  };
  return (
    <header className="header">
      <h3 className="header__array-generate-button" onClick={handleArrayGenerate}>
        Generate New Array
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
      <button className="header__button" onClick={handleMergeSort}>
        Merge Sort
      </button>
      <button className="header__button" onClick={handleBubbleSort}>
        Bubble Sort
      </button>
    </header>
  );
};

export default Header;
