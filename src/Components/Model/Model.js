import React, { useState } from "react";
import "./style.scss";
const Model = ({ closeModel, images }) => {
  const [pic, setPic] = useState(images[0].thumbnail);
  const showPic = (url) => {
    setPic(url);
  };

  return (
    <div className="model" onClick={closeModel}>
      <div className="model-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <p className="model-title">Gallery</p>
          <a href="/#" onClick={closeModel}>
            &#10008;
          </a>
        </div>
        <div className="model-body">
          <div className="moveGallery">
            {pic && <img className="viewImg" src={pic} alt={pic} />}
          </div>
        </div>
        <div className="model-footer">
          <div className="rollGallery">
            {images.map((i, index) => {
              return (
                <span key={index}>
                  <img
                    className="flowImg"
                    onClick={() => showPic(i.thumbnail)}
                    src={i.thumbnail}
                    alt={i}
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
