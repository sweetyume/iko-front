import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./routes/Main";
require("./sass/app.scss");

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
export default App;
