import React, { Component } from "react";
import axios from "axios";
import Continent from "../components/Continent/Continent";
import SearchBar from "../components/SearchBar/SearchBar";
import Section from "../components/Section/Section";

class Destinations extends Component {
  constructor() {
    super();
    this.state = { continent: [] };
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
  showInfo(event) {
    let country = event.target.value.toLowerCase();
    country === "america" ? (country = "americas") : (country = country);

    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => {
        this.setState({ continent: data });
      });
  }

  render() {
    return (
      <Section className="" title="Destinations">
        <div className="">
          <SearchBar/>

          <Continent
            showInfo={this.showInfo.bind(this)}
            countries={this.state.continent}
          />
          {/* {this.state.countries.map(country => (
            <div className="" key={country.name}>
              <img src={country.flag} height="20px" width="20px" />
              <div className="">
                <h3>{country.name}</h3>
                <p>{country.Region}</p>
              </div>
            </div>
          ))} */}
        </div>
      </Section>
    );
  }
}

export default Destinations;