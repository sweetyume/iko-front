import React, { Component } from "react";
import axios from "axios";

import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
require("./Articles.scss");

class Articles extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
  }
  componentDidMount() {
    axios
      .get("/articles")
      .then(res => res.data)
      .then(articles => this.setState({ articles }))
      .catch(error => error);
  }
  render() {
    return (
      <Section className="Articles" title="Articles">
        <div className="Articles_Cards_Container">
          {this.state.articles.map(article => (
            <Card article={article} key={article.id} />
          ))}
        </div>
      </Section>
    );
  }
}

export default Articles;
