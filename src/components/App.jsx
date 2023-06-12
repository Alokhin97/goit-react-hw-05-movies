import { Route, Routes } from 'react-router-dom';

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import { NavLink } from "react-router-dom";

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
