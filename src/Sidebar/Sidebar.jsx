import React from "react";
import styles from "./Sidebar.module.css";
import { Col, Nav } from "react-bootstrap";

const content = ["Portraits", "Landscape", "Blog", "About", "Contact"];

const Sidebar = () => {
  return (
    <>
      <Col className="col-md-3">
        <div className={styles.sidebar}>
          <h3>April Judith</h3>
          <br />
          <div>
            {content.map((item, index) => (
              <div className={styles.items} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Col>
    </>
  );
};

export default Sidebar;
