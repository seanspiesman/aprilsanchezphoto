import React from "react";
import { imageData } from "../src/generateFakeData";

const portraits = () => {
  return (
    <div>
      {imageData.map((image, key) => (
        <img src={image} key={key} />
      ))}
    </div>
  );
};

export default portraits;
