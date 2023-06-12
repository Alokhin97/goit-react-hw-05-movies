import { Route, Routes } from 'react-router-dom';

import { NavLink } from "react-router-dom";
import { lazy } from 'react';

const Home = lazy(() =>
  import('../pages/Home/Home'),
);
const Movies = lazy(() =>
  import('../pages/Movies/Movies'),
);
export const App = () => {
  return (
    <>
       <NavLink to="/">home</NavLink>
       <NavLink to="/movies">movies</NavLink>
      <Routes>
        <Route path="/" index element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
      </Routes>
    </>
  );
};
