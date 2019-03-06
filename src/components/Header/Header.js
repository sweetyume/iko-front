import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

require("./Header.scss");

const Header = () => {
  return (
    <nav className="Header">
      <Link className="Header__Logo" to="/">
        iko!
      </Link>
      <div className="Header__Right">
        <Link className="Header__Right__Button" to="/register">
          <Button label="s'inscrire" />
        </Link>
        <Link className="Header__Right__Button" to="/login">
          <Button label="se connecter" />
        </Link>
      </div>
    </nav>
  );
};
export default Header;
