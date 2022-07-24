import { useDispatch, useSelector } from 'react-redux';
import {
  addFavourite,
  getVotesData,
  fetchRandomImg,
} from '../../../Store/Actions/randomAction';

const useActions = () => {
  const randomCatImg = useSelector((state) => state.randomReducer.randomImg);
  const dispatch = useDispatch();

  const onLikesBtnClick = (e) => {
    e.preventDefault();
    dispatch(
      getVotesData({ image_id: randomCatImg.id, value: 1, sub_id: 'like' })
    );
    dispatch(fetchRandomImg());
  };

  const onFavouritesBtnClick = (e) => {
    e.preventDefault();
    dispatch(addFavourite({ image_id: randomCatImg.id }));
    dispatch(fetchRandomImg());
  };

  const onDislikeBtnClick = (e) => {
    e.preventDefault();
    dispatch(
      getVotesData({ image_id: randomCatImg.id, value: 0, sub_id: 'dislike' })
    );
    dispatch(fetchRandomImg());
  };

  return {
    onLikesBtnClick,
    onFavouritesBtnClick,
    onDislikeBtnClick,
  };
};

export default useActions;
