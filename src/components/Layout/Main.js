import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg="3" className="d-none d-lg-block">
            <LeftSideNav />
          </Col>
          <Col lg="9">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
