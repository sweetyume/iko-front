import React, { Component } from "react";
import axios from "axios";

import Section from "../components/Section/Section";

require("./Profiles.scss");

class Destinations extends Component {
  constructor() {
    super();
    this.state = { countries: [] };
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        const countries = res.data;
        this.setState({ countries });
      })
      .catch(error => error);
  }
  render() {
    return (
      <Section className="Profiles" title="Destinations">
        <div className="Profiles_Cards_Container">
          {this.state.countries.map(country => (
            <div
              className="Profiles_Cards_Container_Item"
              key={country.Alpha3Code}
            >
              <img src={country.flag} height="20px" width="20px" />
              <div className="Profiles_Cards_Container_Item_Content">
                <h3>{country.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }
}

export default Destinations;
