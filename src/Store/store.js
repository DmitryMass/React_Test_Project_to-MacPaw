import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import randomReducer from './Reducers/randomReducer';

export const store = createStore(
  combineReducers({ randomReducer }),
  applyMiddleware(thunk)
);
