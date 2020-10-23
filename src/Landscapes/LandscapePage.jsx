import React, { Fragment, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Landscape.module.css";

const images = [
  "https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg",

  "https://cdn.pixabay.com/photo/2019/06/12/15/07/cat-4269479_960_720.jpg",

  "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_960_720.jpg",

  "https://cdn.pixabay.com/photo/2015/10/12/15/46/fallow-deer-984573_960_720.jpg",

  "https://cdn.pixabay.com/photo/2014/10/01/10/44/hedgehog-468228_960_720.jpg",

  "https://cdn.pixabay.com/photo/2013/09/22/15/29/prairie-dog-184974_960_720.jpg",

  "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg",

  "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",

  "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1537249011554-eb008faf38c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1418985227304-f32df7d84e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1433477155337-9aea4e790195?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1502786129293-79981df4e689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",

  "https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
];

const LandscapePage = () => {
  const [modalImage, setImage] = useState();
  const [prevImage, setPrevImage] = useState();
  const [modalOpen, openModal] = useState(false);
  const [buttonDirection, changeDirection] = useState();

  const columnOne = [];
  const columnTwo = [];
  const columnArr = [columnOne, columnTwo];

  let j = 0;
  for (let i = 0; i < images.length; i++) {
    if (j === 0) {
      columnOne.push(images[i]);
      j++;
    } else if (j === 1) {
      columnTwo.push(images[i]);
      j = 0;
    }
  }

  const goToPrevImage = (modalImage) => {
    const imageIndex = images.indexOf(modalImage);
    if (imageIndex === 0) {
      setPrevImage(modalImage);
      setImage(images[images.length - 1]);
    } else {
      setPrevImage(modalImage);
      setImage(images[imageIndex - 1]);
    }
  };
  const goToNextImage = () => {
    const imageIndex = images.indexOf(modalImage);
    if (imageIndex === images.length - 1) {
      setPrevImage(modalImage);
      setImage(images[0]);
    } else {
      setPrevImage(modalImage);
      setImage(images[imageIndex + 1]);
    }
  };

  let imageOneClass, imageTwoClass;
  if (buttonDirection === "none") {
    imageOneClass = styles.modalImageFadeIn;
    imageTwoClass = styles.modalImageFadeIn;
  } else if (buttonDirection === "forward" && modalOpen) {
    imageOneClass = styles.modalImageForward;
    imageTwoClass = styles.prevModalImageForward;
  } else if (buttonDirection === "backward" && modalOpen) {
    imageOneClass = styles.modalImageBackward;
    imageTwoClass = styles.prevModalImageBackward;
  }

  return (
    <div className={styles.fadeIn}>
      <div className={styles.flexContainer}>
        <div
          className={modalOpen ? styles.modalBase : styles.modalBaseFadeOut}
          key={modalOpen}
          onClick={(e) => {
            if (
              e.target.nodeName !== "IMG" &&
              e.target.nodeName !== "svg" &&
              e.target.nodeName !== "path"
            ) {
              openModal(false);
              setPrevImage(undefined);
              changeDirection("none");
            }
          }}
        >
          <div className={styles.imageModalContainer}>
            <img src={modalImage} key={modalImage} className={imageOneClass} />
            <img src={prevImage} key={prevImage} className={imageTwoClass} />
          </div>
          <div
            className={styles.leftArrow}
            onClick={() => {
              changeDirection("backward");
              goToPrevImage(modalImage);
            }}
          >
            <svg
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>{" "}
          </div>
          <div
            className={styles.rightArrow}
            onClick={(e) => {
              goToNextImage(modalImage);
              changeDirection("forward");
            }}
          >
            <svg
              width="3em"
              height="3em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </div>

        <Sidebar />

        <div className={styles.column}>
          {columnOne.map((image, index) => {
            return (
              <Fragment key={index}>
                <img
                  value={image}
                  onClick={() => {
                    setImage(image);
                    openModal(true);
                  }}
                  key={index}
                  className={styles.images}
                  alt="image"
                  src={image}
                />
              </Fragment>
            );
          })}
        </div>
        <div className={styles.columnTwo}>
          {columnTwo.map((image, index) => {
            return (
              <Fragment key={index}>
                <img
                  value={image}
                  onClick={() => {
                    setImage(image);
                    openModal(true);
                  }}
                  key={index}
                  className={styles.images}
                  alt="image"
                  src={image}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandscapePage;
