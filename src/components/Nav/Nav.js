import React from "react";
import { NavLink } from "react-router-dom";
// import Logo from "../Logo/Logo";

require("./Nav.scss");

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav_List">
        <li className="Nav_List_Item">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/profiles">Profiles</NavLink>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/articles">Articles</NavLink>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/destinations">Destinations</NavLink>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/register">Register</NavLink>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/login">Connexion</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
