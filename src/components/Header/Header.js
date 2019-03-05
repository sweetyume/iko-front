import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavBar from "../Nav/NavBar";

require("./Header.scss");

const Header = () => {
  return (
    <div className="Header">
      {/* <Logo /> */}
      <NavBar />
      {/* <Nav /> */}
    </div>
  );
};
export default Header;
