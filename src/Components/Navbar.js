import React, { Component } from "react";
import "./Navbar.scss";
export class Navbar extends Component {
  render() {
    return (
      <div className="blockBar">
        <ul className="headList">
          <li>
            {" "}
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#phtography">phtography</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
