import React, { Component } from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Main from "./routes/Main";
require("./sass/app.scss");

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Button onClick={this.showModal} />
      </div>
    );
  }
}
export default App;
