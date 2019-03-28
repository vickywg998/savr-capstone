import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import FirstCarousel from "../Assets/Images/firstcarousel.jpg";
import SecondCarousel from "../Assets/Images/secondcarousel.jpg";
import ThirdCarousel from "../Assets/Images/thirdcarousel.jpg";

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={FirstCarousel}
            alt="First slide"
          />
       
         
              <Carousel.Caption>
                <h1>The Savr Web App</h1>
                <h3>Sign Up and Start Using today!</h3>
              </Carousel.Caption>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SecondCarousel}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Easy recipes with ingredients on hand</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ThirdCarousel}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Never let another ingredient go to waste!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
