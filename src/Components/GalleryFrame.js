import React from "react";
const GalleryFrame = ({ images, ...props }) => {
  return (
    <div>
      <div>
        {images.slice(0, 36).map((i, index) => {
          return (
            <span key={i.thumbnail + index}>
              <img
                className="flowImg"
                onClick={() => props.viewImage(i.thumbnail)}
                src={i.thumbnail}
                alt={i}
                loading="lazy"
              />
            </span>
          );
        })}
      </div>
      <div className="clickMore">
        <button
          style={{
            backgroundColor: "violet",
            width: "200px",
            height: "50px",
            borderRadius: "25px",
          }}
          onClick={() => props.viewImage(images[0].thumbnail)}
        >
          Click here to open Gallery
        </button>{" "}
        {/* <img
          style={{ height: "100px", width: "250px" }}
          src={punch}
          alt="OnePunch"
        ></img> */}
      </div>
    </div>
  );
};

export default GalleryFrame;
