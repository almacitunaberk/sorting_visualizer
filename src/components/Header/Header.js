import React, { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Header.css';
import { ImStatsBars } from 'react-icons/im';
import { HiMenu } from 'react-icons/hi';
import { toggle } from '../../redux/slices/toggleDashboard';
import { setArraySize, toggleIsGenerateNew } from '../../redux/slices/arraySlice';

const Header = ({ handleArrayGenerate, handleStart, handleStopResume, wait }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setArraySize(inputRef.current.value));
          dispatch(toggleIsGenerateNew());
        }}
        className="bar__selection"
      >
        <input
          ref={inputRef}
          typeof="number"
          className="bar__selection__input"
          placeholder="How many bars should be sorted?"
        ></input>
        <ImStatsBars className="bar__selection__icon" />
      </form>
      <button className="header__button" onClick={handleStart}>
        Start
      </button>
      <button
        className="header__button"
        onClick={() => {
          handleStopResume();
        }}
      >
        {wait ? 'Resume' : 'Stop'}
      </button>
    </div>
  );
};

export default Header;
