import React from 'react';
import { useState, useEffect } from 'react';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(generateRandomNubmer(10, 1000));
    }
    setArray(newArray);
  };

  useEffect(() => {
    resetArray();
  }, []);

  useEffect(() => {
    document.querySelectorAll('.array-bar').forEach((element, idx) => {
      element.setAttribute('style', `height: ${array[idx]}px`);
    });
  }, [array]);

  const generateRandomNubmer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <div className="bar__container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx}></div>
        ))}
      </div>
    </>
  );
};

export default SortingVisualizer;
