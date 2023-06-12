import { NavItem, NavList } from './AppMenu.styled';

import { NavLink } from "react-router-dom";

export const AppMenu = () => {
  return (
    <NavList>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
      <NavLink to="/messages">Messages</NavLink>
    </NavList>
  );
};
