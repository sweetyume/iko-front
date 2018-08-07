import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
require("./Header.scss");

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <Nav />
    </div>
  );
};
export default Header;
