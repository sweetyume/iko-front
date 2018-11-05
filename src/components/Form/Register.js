import React, { Component } from "react";
import Button from "../Button/Button";
import Section from "../Section/Section";

require("./Register.scss");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <Section className="Register" title="Inscrivez-vous">
        <form className="Register__Form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Nom"
          />
          <input type="password" placeholder="Mot de passe" />
          <input type="text" placeholder="Adresse e-mail" />
          <Button label="Je m'inscris" />
          <p className="Register__Form__Message">
            Déjà membre? <a href="#">Connectez-vous</a>
          </p>
        </form>
      </Section>
    );
  }
}
export default Register;
