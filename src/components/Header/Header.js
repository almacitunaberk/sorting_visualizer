import React from 'react';
import { useState } from 'react';
import './Header.css';
import { ImStatsBars } from 'react-icons/im';

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
    <div className="header">
      <button className="generate__array__button" onClick={handleArrayGenerate}>
        Generate New Array
      </button>
      <form onSubmit={handleSubmit} className="bar__selection">
        <input
          typeof="number"
          className="bar__selection__input"
          placeholder="How many bars should be sorted?"
          onChange={(e) => {
            setArraySize((prev) => {
              return e.target.value;
            });
          }}
        ></input>
        <ImStatsBars className="bar__selection__icon" />
      </form>
      <button className="header__button" onClick={handleStop}>
        Stop
      </button>
      <button className="header__button" onClick={handleResume}>
        Resume
      </button>
      <button className="header__button" onClick={handleResume}>
        Shuffle
      </button>
    </div>
  );
};

export default Header;
