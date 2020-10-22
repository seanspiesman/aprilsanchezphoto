import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./HomePage.module.css";
import Link from "next/link";

const path = [
  ["Portraits", "/portraits"],
  ["Landscapes", "/landscapes"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const HomePage = () => {
  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          className={styles.blackFades}
          style={{ width: "100vw", height: "100vh" }}
        />
        <div
          className={styles.fadeIn}
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>
      {/* <div className={styles.backgroundimg} /> */}
      <div className={styles.title}>
        <h1 className={styles.header}>April Judith Photography</h1>
        <Row className="text-center">
          {path.map((page, index) => (
            <Col key={index} className="col-sm-3">
              <Link href={page[1]}>
                <a className={styles.link} stlye={{ fontWeight: 1000 }}>
                  {page[0]}
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomePage;
