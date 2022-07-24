import {
  addToFavourite,
  addVotes,
  deleteFromFavourites,
  getFavourites,
  getOneFavourite,
  getRandomImg,
  getVote,
  getVotes,
  removeVote,
} from '../../Api';

export const ACTION_GET_RANDOM = 'ACTION_GET_RANDOM';
export const ACTION_GET_VOTES = 'ACTION_GET_VOTES';
export const ACTION_ADD_VOTES = 'ACTION_ADD_VOTES';
export const ACTION_DELETE_VOTES = 'ACTION_DELETE_VOTES';

export const ACTION_GET_FAVOURITES = 'ACTION_GET_FAVOURITES';
export const ACTION_ADD_FAVOURITE = 'ACTION_ADD_FAVOURITE';
export const ACTION_DELETE_FAVOURITE = 'ACTION_DELETE_FAVOURITE';

export const fetchRandomImg = () => {
  return async (dispatch) => {
    const data = await getRandomImg();
    dispatch({ type: ACTION_GET_RANDOM, payload: data });
  };
};

export const fetchAllVotes = () => {
  return async (dispatch) => {
    const data = await getVotes();
    dispatch({ type: ACTION_GET_VOTES, payload: data });
  };
};

export const getVotesData = (votes) => {
  return async (dispatch) => {
    const data = await addVotes(votes);
    const res = await getVote(data.id);
    dispatch({ type: ACTION_ADD_VOTES, payload: res });
  };
};

export const deleteVotes = (id) => {
  return async (dispatch) => {
    const data = await removeVote(id);

    dispatch({ type: ACTION_DELETE_VOTES, payload: id });
  };
};

export const fetchFavourite = () => {
  return async (dispatch) => {
    const data = await getFavourites();
    dispatch({ type: ACTION_GET_FAVOURITES, payload: data });
  };
};

export const addFavourite = (favourite) => {
  return async (dispatch) => {
    const data = await addToFavourite(favourite);
    const res = await getOneFavourite(data.id);
    dispatch({
      type: ACTION_ADD_FAVOURITE,
      payload: res,
    });
  };
};

export const removeFromFavourite = (id) => {
  return async (dispatch) => {
    const data = await deleteFromFavourites(id);
    dispatch({ type: ACTION_DELETE_FAVOURITE, payload: id });
  };
};
