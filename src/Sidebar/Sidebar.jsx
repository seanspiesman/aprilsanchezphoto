import React, { Fragment } from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

const path = [
  ["Portraits", "/portraits"],
  ["Landscapes", "/landscapes"],
  ["About", "/about"],
  ["Contact", "/contact"],
];
const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
