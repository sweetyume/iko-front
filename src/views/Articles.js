import React, { Component } from "react";
import axios from "axios";

import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import Article from "./Article";
require("./Articles.scss");

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  async componentDidMount() {
    await axios
      .get("/articles")
      .then(res => res.data)
      .then(articles => this.setState({ articles }))
      .catch(error => error);
  }
  render() {
    const { articles } = this.state;
    return (
      <Section className="Articles" title="Articles">
        <Article />
        <div className="Articles_Container">
          {this.state &&
            articles &&
            articles.map((article, index) => (
              <Card
                className-="Articles_Container_Card"
                articleId={article.id}
                key={index}
              />
            ))}
        </div>
      </Section>
    );
  }
}

export default Articles;
