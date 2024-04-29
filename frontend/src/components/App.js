import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";  
import Footer from "./Footer";  
import Items from "./Items";
import Categories from "./Categories"

export default class App extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div>
        <Header />
        <Items />
        <Categories />
        <Footer />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
