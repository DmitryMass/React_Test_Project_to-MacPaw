import React from 'react';

import styles from './index.m.css';
import useActions from './useActions';

const NavBtns = () => {
  const { onLikesBtnClick, onFavouritesBtnClick, onDislikeBtnClick } =
    useActions();

  return (
    <nav className={`flex__container ${styles.nav__menu}`}>
      <button onClick={onLikesBtnClick} className={styles.nav__like} />
      <button onClick={onFavouritesBtnClick} className={styles.nav__favorite} />
      <button onClick={onDislikeBtnClick} className={styles.nav__dislike} />
    </nav>
  );
};

export default NavBtns;
