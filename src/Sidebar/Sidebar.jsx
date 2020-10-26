import React, { Fragment } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

const path = [
  ["Portraits", "/portraits"],
  ["Landscapes", "/landscapes"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
const Sidebar = ({ style }) => {
  return (
    <div className={styles.sidebar}>
      <div className={style}>
        <div className={styles.head}>
          <a className={styles.head} href={"/"}>
            April Judith
          </a>
        </div>
        <div>
          {path.map((page, index) => {
            return (
              <Fragment key={index}>
                <Link href={page[1]} className={styles.items} key={index}>
                  <a className={styles.link}>{page[0]}</a>
                </Link>
                <br />
              </Fragment>
            );
          })}
          <a href="https://www.instagram.com/apriljudithphotography/">
            <img
              className={styles.instaLogo}
              src="https://image.flaticon.com/icons/png/512/87/87390.png"
            />
          </a>
          <a href="https://twitter.com/sanchezaj11?lang=en">
            <img
              className={styles.twitterLogo}
              src="https://image.flaticon.com/icons/png/512/23/23931.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
