import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages for this product
import HomePage from "./views/Homepage/HomePage";
import LandingPage from "./views/LandingPage";
import LoginPage from "./views/Authentication/LoginPage";
import CreateRecipe from "./views/CreateRecipe/CreateRecipe";
import ViewRecipe from "./views/ViewRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/create" component={CreateRecipe} />
        <Route path="/view" component={ViewRecipe} />
      </Switch>
    </BrowserRouter>
  );
}
