import { useState } from "react";
import Navbar from "./Components/Navbar";
import profile from "./Images/profile2.jpg";
import linkedin from "./Images/linkedin.png";
import str from "./Images/str.jpg";
import { Parallax } from "react-parallax";
import react from "./Images/reactjs.png";
import angular from "./Images/angular.png";
import nodejs from "./Images/nodejs.png";
import ruby from "./Images/ruby.png";
import material from "./Images/materialui.png";
import html from "./Images/html.png";
import css from "./Images/css.png";
import js from "./Images/javascript.png";
import gcp from "./Images/gcp.png";
import sqldatabase from "./Images/sqldatabase.png";
import scss from "./Images/scss.png";
import Gallery from "./Gallery/images.json";
import GalleryFrame from "./Components/GalleryFrame";
import Model from "./Components/Model/Model";
import Resume from "./Files/Resume";
import "./App.scss";

function App() {
  const [value, setValue] = useState(0);
  const viewImage = (i) => {
    console.log(i, i !== 0);
    setValue(i);
  };
  const closeModel = () => {
    setValue(0);
  };
  return (
    <div className="main">
      <Navbar />
      <section className="home" id="home">
        <div className="bioInfo">
          <div className="cliPath"></div>
          <img src={profile} alt="KOOL" className="image" />
          <div className="headers">
            <p className="fullName">Seela Sudheer </p>
            <p className="skills">Full Stack Developer . Photography . Writing </p>
            <a href="https://www.linkedin.com/in/seela-sudheer-715386125/" rel="noreferrer" target="_blank">
              <img src={linkedin} alt="linkedin" className="linkedin2" />
            </a>
          </div>
        </div>
      </section>

      <section className="skill" id="skill">
        <Parallax bgImage={str} strength={400}>
          <div className="grid-container" style={{ height: 648 }}>
            <div>
              <ul className="skillset">
                <li>
                  {" "}
                  <img className="skilllogos" src={js} alt="js" /> Javascript
                </li>
                <li>
                  <img className="skilllogos" src={react} alt="react" /> React js
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={angular} alt="angular" /> Angular
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={sqldatabase} alt="sqldatabase" /> Sql DB
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={nodejs} alt="nodejs" /> Node js
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={ruby} alt="nodejs" /> Ruby
                </li>
              </ul>
            </div>
            <div>
              <ul className="skillset">
              <li>
                  {" "}
                  <img className="skilllogos" src={gcp} alt="Google Cloud Platform" title="Google Cloud Platform" /> GCP
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={html} alt="html" /> HTML
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={css} alt="css" /> CSS
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={scss} alt="css" /> SCSS
                </li>
                <li>
                  {" "}
                  <img className="skilllogos" src={material} alt="materiaui" /> Material UI
                </li>
              </ul>
            </div>
          </div>
        </Parallax>
      </section>
      <section className="resume" id="resume">
        <Resume />
      </section>
      <section className="phtography" id="phtography">
        <div className="galleryHeader">
          <p>Gallery</p>
          <div>
            <GalleryFrame images={Gallery.images} viewImage={viewImage} />
            {/* {base.length > 0 &&
              base.map((x) => {
                return (
                  <div>
                    <img
                      src={`data:image/png;base64,` + x.g}
                      alt="XXXX"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                );
              })} */}
          </div>
        </div>
      </section>

      {value !== 0 && <Model closeModel={closeModel} images={Gallery.images} />}
    </div>
  );
}

export default App;
