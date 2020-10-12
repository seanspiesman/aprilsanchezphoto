import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./HomePage.module.css";
import Link from "next/link";

const path = [
  ["Albums", "/albums"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const HomePage = () => {
  return (
    <div>
      <img
        className={styles.backgroundimg}
        src="https://scontent-dfw5-1.cdninstagram.com/v/t51.2885-15/e35/84409610_190602368827978_8388603972793639058_n.jpg?_nc_ht=scontent-dfw5-1.cdninstagram.com&_nc_cat=110&_nc_ohc=ZJuNbAr2YUsAX9TCZbw&_nc_tp=18&oh=daa3e25b51446de86be5195f2b70b819&oe=5FACD519"
      />
      <div className={styles.title}>
        <h1>April Judith Photography</h1>
        <Row className="text-center">
          {path.map((item, index) => (
            <Col key={index} className="col-md-3">
              <Link href={item[1]}>
                <a className={styles.link}>{item[0]}</a>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
