import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { BackBtn } from '../../Components/BackBtn';
import FilterPanel from '../../Components/FilterPanel';
import GridLayout from '../../Components/GridComponent';
import NotItemFound from '../../Components/NotItemFound';
import { removeFromFavourite } from '../../Store/Actions/randomAction';

const Favourite = () => {
  const dispatch = useDispatch();
  const favouriteData = useSelector((state) => state.randomReducer.favourite);

  const onRemoveClick = (id) => {
    dispatch(removeFromFavourite(id));
  };

  return (
    <div className="content__wrapper">
      <FilterPanel />
      <div className="box__wrapper">
        <div className="flex__target ">
          <BackBtn children={'FAVOURITES'} />
        </div>
        {favouriteData.length === 0 ? (
          <NotItemFound />
        ) : (
          <GridLayout data={favouriteData} onRemoveClick={onRemoveClick} />
        )}
      </div>
    </div>
  );
};

export default Favourite;
