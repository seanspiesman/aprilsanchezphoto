import React from "react";
import data from "../src/data.json";

const portraits = () => {
  let imageData = Object.values(data);
  return (
    <div>
      {imageData.map((image, key) => (
        <img src={image} key={key} />
      ))}
    </div>
  );
};

export default portraits;
