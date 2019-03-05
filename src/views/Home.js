import React, { Component } from "react";
import Section from "../components/Section/Section";
import axios from "axios";

require("./Home.scss");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Section className="Hello" title="Hello">
        <p className="Hello__Content">
          Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
          Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
          rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
          molestie. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus.
        </p>
      </Section>
    );
  }
}

export default Home;
