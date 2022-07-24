import React from 'react';
import { useSelector } from 'react-redux';
import { BackBtn } from '../../Components/BackBtn';
import FilterPanel from '../../Components/FilterPanel';
import NavBtns from '../../Components/LikeDislikeFavourite';

import styles from './index.m.css';

const Voting = () => {
  const randomCatImg = useSelector((state) => state.randomReducer.randomImg);

  return (
    <div className="content__wrapper">
      <FilterPanel />
      <div className="box__wrapper">
        <div className="flex__target">
          <BackBtn children={'VOTING'} />
        </div>
        <div className={styles.voting__main}>
          <div className={styles.voting__img}>
            <img src={randomCatImg.url} alt="" />
            <NavBtns />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voting;
