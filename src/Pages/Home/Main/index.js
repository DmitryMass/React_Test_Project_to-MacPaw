import React from 'react';
import TabsCat from '../../../Components/CatTabs';

import styles from './index.m.css';
// non-modules styles in 'constant.css' file
const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.main__title}>
        <h1 className="h1-title">Hi intern!</h1>
        <p className={`p-info ${styles.main__subtitle}`}>
          Welcome to MI 2022 Front-end test
        </p>
      </div>
      <div className={styles.main__tabs}>
        <h5 className={`p-info ${styles.main__tabs_title}`}>
          Lets start using The Cat Api
        </h5>
        <TabsCat />
      </div>
    </main>
  );
};

export default Main;
