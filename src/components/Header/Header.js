import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Header.css';
import { ImStatsBars } from 'react-icons/im';
import { HiMenu } from 'react-icons/hi';
import { toggle } from '../../redux/slices/toggleDashboard';
const Header = ({
  handleArrayGenerate,
  handleBarNumberChange,
  handleStart,
  handleStop,
  handleResume,
  handleShuffle,
}) => {
  const dispatch = useDispatch();
  const [arraySize, setArraySize] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBarNumberChange(arraySize);
  };

  const handleToggleMenuClick = () => {
    dispatch(toggle());
  };

  return (
    <div className="header">
      <div onClick={handleToggleMenuClick}>
        <HiMenu className="toggle__button" />
      </div>
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
      <button className="header__button" onClick={handleStart}>
        Start
      </button>
      <button className="header__button" onClick={handleStop}>
        Stop
      </button>
      <button className="header__button" onClick={handleResume}>
        Resume
      </button>
      <button className="header__button" onClick={handleShuffle}>
        Shuffle
      </button>
    </div>
  );
};

export default Header;
