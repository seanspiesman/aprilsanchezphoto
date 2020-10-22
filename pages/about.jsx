import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../src/Sidebar/Sidebar";

const about = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <Row>
        <Sidebar />
        <Col className="col-md-12">TEXT</Col>
      </Row>
    </div>
  );
};

export default about;
