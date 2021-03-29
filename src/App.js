import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages for this product
import HomePage from "./views/HomePage";
import LandingPage from "./views/LandingPage";
import LoginPage from "./views/Authentication/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}
