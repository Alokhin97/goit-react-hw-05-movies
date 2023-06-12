import { Route, Routes } from 'react-router-dom';

import { NavLink } from "react-router-dom";

export const App = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <Routes>
        <Route path="/" element={ <p>Home</p> } />
        <Route path="/messages" element={ <p>Hello</p> } />
      </Routes>
    </>
  );
};
