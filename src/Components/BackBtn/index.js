import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.m.css';

export const BackBtn = ({ children }) => {
  let navigate = useNavigate();

  return (
    <>
      <button className={styles.navigate__btn} onClick={() => navigate(-1)} />
      <div className={`p-text ${styles.voting__page}`}>{children}</div>
    </>
  );
};
