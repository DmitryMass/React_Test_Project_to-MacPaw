import React from 'react';

import styles from './index.m.css';

import girl from '../../Assets/Images/girl-and-pet.png';

const Home = () => {
  return (
    <div className={styles.aside}>
      <img className={styles.aside__girl} src={girl} alt="" />
    </div>
  );
};

export default Home;
