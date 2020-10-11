import React, { useState, useEffect } from "react";
import data from "../src/data.json";

const portraits = () => {
  const [imageIndex, setImageIndex] = useState(0);
  let imageData = Object.values(data);

  useEffect(() => {
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[imageIndex].style.display = "block";
  });

  return (
    <div className="container">
      {imageData.map((image, number) => (
        <div className="mySlides" key={number}>
          <div className="numbertext">
            {number}/ {imageData.length}
          </div>
          <img src={image} style={{ width: "100%" }} />
        </div>
      ))}
      <a
        className="prev"
        onClick={() => {
          if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
          }
        }}
      >
        &#10094;
      </a>
      <a
        className="next"
        onClick={() => {
          if (imageIndex < imageData.length - 1) {
            setImageIndex(imageIndex + 1);
          }
        }}
      >
        &#10095;
      </a>
    </div>
  );
};

export default portraits;
