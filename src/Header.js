import React from 'react';
import { useState } from 'react';
import './Header.css';

const Header = ({
  handleArrayGenerate,
  handleBarNumberChange,
  handleMergeSort,
  handleBubbleSort,
  handleSelectionSort,
  handleInsertionSort,
  handleStop,
  handleResume,
}) => {
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
      <button className="header__button" onClick={handleSelectionSort}>
        Selection Sort
      </button>
      <button className="header__button" onClick={handleInsertionSort}>
        Insertion Sort
      </button>
      <button className="header__button" onClick={handleStop}>
        Stop
      </button>
      <button className="header__button" onClick={handleResume}>
        Resume
      </button>
    </header>
  );
};

export default Header;
