import React from 'react';
import './Dashboard.css';
import { RiBubbleChartFill } from 'react-icons/ri';
import { IoGitMergeSharp } from 'react-icons/io5';
import { FaSortAmountDown } from 'react-icons/fa';
import { GiClick } from 'react-icons/gi';
import { BiDownload } from 'react-icons/bi';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="navigation">
        <ul className="navigation__list">
          <li className="app__name">
            <a className="app__name-tag" href="#">
              <span className="app__icon">
                <FaSortAmountDown className="app__icon" />
              </span>
              <span className="app__name-title">Sortalizer</span>
            </a>
          </li>
          <li className="algo__link">
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <IoGitMergeSharp className="algo__icon" />
              </span>
              <span className="algo__title ">Merge Sort</span>
            </a>
          </li>
          <li className="algo__link">
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <RiBubbleChartFill className="algo__icon" />
              </span>
              <span className="algo__title ">Bubble Sort</span>
            </a>
          </li>
          <li className="algo__link">
            <a className="algo__link--tag" href="#">
              <span className="algo__icon--container">
                <GiClick className="algo__icon" />
              </span>
              <span className="algo__title ">Selection Sort</span>
            </a>
          </li>
          <li className="algo__link">
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
