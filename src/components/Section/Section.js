import React, { Fragment } from "react";
require("./Section.scss");

const Section = props => (
  <div className="Section">
    <h2 className="Section__Title">{props.title}</h2>
    <Fragment>
      {props.content ? props.content : null}
      {props.children}
    </Fragment>
  </div>
);

export default Section;
