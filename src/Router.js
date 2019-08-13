import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import ProjectList from "./components/Projects/ProjectList";

function Router() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670;
      if (navRef.current !== show) {
        console.log("inside");
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      {console.log("inside component", navBackground)}
      <Navbar
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "red" : "transparent",
          zIndex: navBackground ? "0" : "1"
        }}
      />
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
      <ProjectList />
    </BrowserRouter>
  );
}

export default Router;
