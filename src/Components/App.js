import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Dislikes from '../Pages/Dislikes';
import Favourite from '../Pages/Favourite';
import Likes from '../Pages/Likes';
import Home from '../Pages/Home';
import Header from '../Pages/Home/Header';
import Main from '../Pages/Home/Main';
import Voting from '../Pages/Voting';

import { ROUTE } from './Constant';

import {
  fetchAllVotes,
  fetchFavourite,
  fetchRandomImg,
} from '../Store/Actions/randomAction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomImg());
  }, []);

  useEffect(() => {
    dispatch(fetchFavourite());
  }, []);

  useEffect(() => {
    dispatch(fetchAllVotes());
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper container">
        <div className="container__sm">
          <Header />
          <Main />
        </div>
        <Routes>
          <Route path={ROUTE.HOME} element={<Home />} />
          <Route path={ROUTE.VOTING} element={<Voting />} />
          <Route path={ROUTE.LIKES} element={<Likes />} />
          <Route path={ROUTE.FAVOURITES} element={<Favourite />} />
          <Route path={ROUTE.DISLIKES} element={<Dislikes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
