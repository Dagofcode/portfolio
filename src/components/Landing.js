import React, { Component } from "react";
import me from "../images/me.JPG";
import ProjectList from "./Projects/ProjectList";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-container ">
        <div className="landing-content">
          <div className="header gradient">
            <div>
              <img src={me} alt="" />
            </div>
            <div className="landing-info">
              <h1>Dagoberto Rodriguez Martinez</h1>
            </div>
          </div>
          <div className="p-description">
            <p style={{ color: "black" }}>
              Hello my name is Dagoberto, but you can call me{" "}
              <strong>Dago </strong> . I am an enthusiastic programmer currently
              ready to take on the world. Jr. Full-stack specialized in{" "}
              <strong>MERN </strong> . Capable of learning anything and working
              with anyone. Please, by all means take a look at my portfolio!
            </p>
          </div>
        </div>
        <div />
        <ProjectList />
      </div>
    );
  }
}
