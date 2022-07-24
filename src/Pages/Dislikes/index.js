import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { BackBtn } from '../../Components/BackBtn';
import FilterPanel from '../../Components/FilterPanel';
import GridLayout from '../../Components/GridComponent';
import NotItemFound from '../../Components/NotItemFound';
import { deleteVotes } from '../../Store/Actions/randomAction';

const Dislikes = () => {
  const dispatch = useDispatch();
  const votes = useSelector((state) => state.randomReducer.votes);
  const votesData = votes.filter((item) => item.value === 0);

  const onRemoveClick = (id) => {
    dispatch(deleteVotes(id));
  };

  return (
    <div className="content__wrapper">
      <FilterPanel />
      <div className="box__wrapper">
        <div className="flex__target ">
          <BackBtn children={'DISLIKES'} />
        </div>
        {votesData.length === 0 ? (
          <NotItemFound />
        ) : (
          <GridLayout data={votesData} onRemoveClick={onRemoveClick} />
        )}
      </div>
    </div>
  );
};

export default Dislikes;
