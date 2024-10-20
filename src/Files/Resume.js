import React from "react";
import "./Resume.scss";
import Xresume from "./seelasudheer.pdf";

function Resume() {
  return (
    <div className="download">
      <div className="align_resume">
        <div>
          <img src="https://ezgif.com/images/bg-transparent.gif" alt="find" />
        </div>
        <a href={Xresume} download="sudheer">
          &#128226; Download Resume &#128206;
        </a>
      </div>
    </div>
  );
}

export default Resume;
