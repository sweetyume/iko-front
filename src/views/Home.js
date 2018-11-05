import React, { Component } from "react";
import Section from "../components/Section/Section";
import MapView from "../components/Map/MapView";

class Home extends Component {
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
        <MapView />
      </Section>
    );
  }
}

export default Home;
