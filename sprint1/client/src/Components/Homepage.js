import React, { Component } from "react";
import ControlledCarousel from "./Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  render() {
    return (
      <div>
        <ControlledCarousel />

      </div>
    );
  }
}

export default Home;

