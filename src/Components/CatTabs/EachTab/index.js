import React from 'react';
import { NavLink } from 'react-router-dom';

import '../index.css';

const Tab = ({ vote, children, classItem, link }) => {
  const activeClass = ({ isActive }) => (isActive ? 'tab__active' : 'tab');

  return (
    <NavLink to={link} className={activeClass}>
      <div className={classItem}>
        <object className="tab__obj" data={vote} type=""></object>
      </div>
      <div className="p-sm tab__btn">{children}</div>
    </NavLink>
  );
};

export default Tab;
