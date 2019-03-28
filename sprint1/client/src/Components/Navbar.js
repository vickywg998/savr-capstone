import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/global.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Navbarr extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="info" variant="info">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src="/Assets/Logo/savr.png"
                width="200"
                height="60"
                alt="logo"
                className="d-inline-block align-top"
              />
            </Link>
          </Navbar.Brand>
        </Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav.Item>
            <NavLink>
              <Link to="/feature">Create</Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink>
              <Link to="/search">Search</Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink>
              <Link to="/app">App</Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink>
              <Link to="/feature/all">Your List</Link>
            </NavLink>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbarr;
