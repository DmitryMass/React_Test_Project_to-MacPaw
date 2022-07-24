import {
  ACTION_ADD_FAVOURITE,
  ACTION_ADD_VOTES,
  ACTION_DELETE_FAVOURITE,
  ACTION_DELETE_VOTES,
  ACTION_GET_FAVOURITES,
  ACTION_GET_RANDOM,
  ACTION_GET_VOTES,
} from '../Actions/randomAction';

const initialState = {
  randomImg: {},
  favourite: [],
  votes: [],
};

const randomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_GET_RANDOM:
      return {
        ...state,
        randomImg: payload[0],
      };
    case ACTION_GET_VOTES:
      return {
        ...state,
        votes: payload,
      };
    case ACTION_GET_FAVOURITES:
      return {
        ...state,
        favourite: payload,
      };
    case ACTION_ADD_FAVOURITE:
      return {
        ...state,
        favourite: [...state.favourite, payload],
      };
    case ACTION_DELETE_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite.filter((item) => item.id !== payload),
      };
    case ACTION_ADD_VOTES:
      return {
        ...state,
        votes: [...state.votes, payload],
      };
    case ACTION_DELETE_VOTES:
      return {
        ...state,
        votes: state.votes.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default randomReducer;
