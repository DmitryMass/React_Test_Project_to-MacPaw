import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE } from '../Constant';

import styles from './index.m.css';

const FilterPanel = () => {
  const activeClass = ({ isActive }) =>
    isActive ? styles.filter__active : styles.filter__link;
  const activeFav = ({ isActive }) =>
    isActive ? styles.filter__activeFav : styles.filter__linkFav;
  const activeDislike = ({ isActive }) =>
    isActive ? styles.filter__activeDislike : styles.filter__linkDislike;

  return (
    <div className={`flex__wrapper ${styles.filter__wrapper}`}>
      <div>
        <input
          className={`p-text ${styles.filter__input}`}
          type="text"
          placeholder="Search for breeds by name"
        />
      </div>
      <nav className={`flex__wrapper ${styles.filter__panel}`}>
        <NavLink className={activeClass} to={ROUTE.LIKES} />
        <NavLink className={activeFav} to={ROUTE.FAVOURITES} />
        <NavLink className={activeDislike} to={ROUTE.DISLIKES} />
      </nav>
    </div>
  );
};

export default FilterPanel;
