import React, { useState } from 'react';
import './Dashboard.css';
import { RiBubbleChartFill } from 'react-icons/ri';
import { BiRun } from 'react-icons/bi';
import { IoGitMergeSharp } from 'react-icons/io5';
import { FaSortAmountDown } from 'react-icons/fa';
import { GiClick } from 'react-icons/gi';
import { BiDownload } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { changeAlgo } from '../../redux/slices/selectedAlgo';

const Dashboard = () => {
  const _toggle = useSelector((state) => state.toggleDashboard);
  const toggle = _toggle.toggle;
  const dispatch = useDispatch();

  const [selectedAlgo, setSelectedAlgo] = useState('merge');

  const mergeSelected = (e) => {
    setSelectedAlgo('merge');
    dispatch(changeAlgo('merge'));
  };
  const bubbleSelected = () => {
    setSelectedAlgo('bubble');
    dispatch(changeAlgo('bubble'));
  };
  const insertionSelected = () => {
    setSelectedAlgo('insertion');
    dispatch(changeAlgo('insertion'));
  };
  const selectionSelected = () => {
    setSelectedAlgo('selection');
    dispatch(changeAlgo('selection'));
  };
  const quickSortSelected = () => {
    setSelectedAlgo('quickSort');
    dispatch(changeAlgo('quickSort'));
  };

  return (
    <div className="container">
      <div className={`navigation ${toggle && 'toggle'}`}>
        <ul className="navigation__list">
          <li className="app__name">
            <a className="app__name-tag" href="#">
              <span className="app__icon">
                <FaSortAmountDown className="app__icon" />
              </span>
              <span className="app__name-title">Sortalizer</span>
            </a>
          </li>
          <li className={`algo__link ${selectedAlgo === 'merge' && 'clicked'}`} onClick={mergeSelected} id="merge">
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <IoGitMergeSharp className="algo__icon" />
              </span>
              <span className="algo__title ">Merge Sort</span>
            </a>
          </li>
          <li className={`algo__link ${selectedAlgo === 'bubble' && 'clicked'}`} onClick={bubbleSelected} id="bubble">
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <RiBubbleChartFill className="algo__icon" />
              </span>
              <span className="algo__title ">Bubble Sort</span>
            </a>
          </li>
          <li
            className={`algo__link ${selectedAlgo === 'selection' && 'clicked'}`}
            onClick={selectionSelected}
            id="selection"
          >
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <GiClick className="algo__icon" />
              </span>
              <span className="algo__title ">Selection Sort</span>
            </a>
          </li>
          <li
            className={`algo__link ${selectedAlgo === 'quickSort' && 'clicked'}`}
            onClick={quickSortSelected}
            id="quickSort"
          >
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <BiRun className="algo__icon" />
              </span>
              <span className="algo__title ">Quick Sort</span>
            </a>
          </li>
          <li
            className={`algo__link ${selectedAlgo === 'insertion' && 'clicked'}`}
            onClick={insertionSelected}
            id="insertion"
          >
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <BiDownload className="algo__icon" />
              </span>
              <span className="algo__title ">Insertion Sort</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
