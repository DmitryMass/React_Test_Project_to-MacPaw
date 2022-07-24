import React from 'react';

import vote from '../../Assets/Icons/vote-table.svg';
import breeds from '../../Assets/Icons/pet-breeds.svg';
import search from '../../Assets/Icons/images-search.svg';
import { ROUTE } from '../Constant';
import Tab from './EachTab';

import './index.css';

const TabsCat = () => {
  return (
    <div className="tab__wrapper">
      <Tab
        vote={vote}
        link={ROUTE.VOTING}
        classItem={'tab__voting'}
        children={'VOTING'}
      />
      <Tab
        vote={breeds}
        link={ROUTE.BREEDS}
        classItem={'tab__breeds'}
        children={'BREEDS'}
      />
      <Tab
        vote={search}
        link={ROUTE.GALLERY}
        classItem={'tab__gallery'}
        children={'GALLERY'}
      />
    </div>
  );
};

export default TabsCat;
