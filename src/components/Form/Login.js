import React, { Component } from "react";
import Button from "../Button/Button";
import Section from "../Section/Section";
import { withRouter } from "react-router-dom";
import axios from "axios";

require("./Register.scss");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let login = null;
    try {
      login = await axios.post("/login", {
        login: this.state.email,
        password: this.state.password
      });
      console.log("Login: ", login.data);
      this.props.history.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <Section className="Register" title="Inscrivez-vous">
        <form className="Register__Form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Adresse e-mail"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Mot de passe"
            onChange={this.handleChange}
          />
          <Button label="Se connecter" type="submit" />
          <p className="Register__Form__Message">
            Pas encore inscris? <a href="#">Inscrivez-vous</a>
          </p>
        </form>
      </Section>
    );
  }
}
export default withRouter(Login);
