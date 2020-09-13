import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Development from "./components/Development/Development";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/development" component={Development} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
