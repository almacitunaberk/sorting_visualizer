import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(300);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(generateRandomNubmer(10, 1000));
    }
    setArray(newArray);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const generateRandomNubmer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <Header handleArrayGenerate={() => resetArray()} handleBarNumberChange={(value) => setArraySize(value)} />
      <div className="bar__container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
        ))}
      </div>
    </>
  );
};

export default SortingVisualizer;
