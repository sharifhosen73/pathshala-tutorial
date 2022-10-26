import React, { useState } from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import "./Header.css";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar bg="info" sticky="top" expand="lg">
        <Container fluid>
          <Link className="brand-name" to="/">
            Pathshala Tutorial
          </Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="header-link" to="/">
                Courses
              </Link>
              <Link className="header-link" to="/">
                Courses
              </Link>
              <Link className="header-link" to="/blog">
                Blog
              </Link>
            </Nav>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={60}
            />
            <Form className="d-flex me-5">
              {user?.uid || user?.email ? (
                <>
                  <Card.Img
                    variant="top"
                    className="header-image rounded-circle"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                  {/* <img src={user?.photoURL} alt={user?.displayName} /> */}
                  {/* <p className="mx-1">{user?.displayName}</p> */}
                  <Button
                    onClick={handleLogOut}
                    className="mx-4"
                    variant="outline-dark"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button className="me-2" variant="outline-dark">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="outline-dark">
                    {" "}
                    <Link to="register">Register</Link>{" "}
                  </Button>
                </>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
