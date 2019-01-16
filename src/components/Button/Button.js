import React from "react";
require("./Button.scss");

const Button = props => {
  return (
    <button className="Button" onClick={props.onClick} value={props.children}>
      {props.label}
    </button>
  );
};
export default Button;
