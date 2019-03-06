import React from "react";
import { NavLink, Link } from "react-router-dom";

require("./Nav.scss");

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav_List">
        <li className="Nav_List_Item dropdown">
          <NavLink to="/destinations" className="dropbtn">
            Destinations
          </NavLink>
          <div className="dropdown-content">
            <Link to="/destinations">Asie</Link>
            <Link to="/destinations">Asie</Link>
          </div>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/profiles">Profiles</NavLink>
        </li>
        <li className="Nav_List_Item">
          <NavLink to="/articles">Programmes</NavLink>
        </li>

        {/* <li className="Nav_List_Item">
          <div className="Dropdown">
            <NavLink to="/destinations">Destinations</NavLink>
            <div className="Dropdown_Content">
              <Link to="/destinations">Asie</Link>
              <Link to="/destinations">Afrique</Link>
              <Link to="/destinations">Amérique</Link>
            </div>
          </div>
        </li> */}

        <li className="Nav_List_Item">
          <NavLink to="/contact">Conseils et Astuces</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
