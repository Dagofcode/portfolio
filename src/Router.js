import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ProjectList from "./components/Projects/ProjectList";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
      <ProjectList />
    </BrowserRouter>
  );
}

export default Router;
