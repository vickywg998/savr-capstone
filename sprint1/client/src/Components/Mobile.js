import React, { Component } from "react";
import Mockup from "../Assets/Images/Food-list-phone.png";
import Discover from "../Assets/Images/Discover-phone.png";
import Download from "../Assets/Icons/download.svg";
import Carrot from "../Assets/Icons/carrot.svg";
import Heart from "../Assets/Icons/heart.svg";
import Scan from "../Assets/Icons/scan.svg";
import Search from "../Assets/Icons/search.svg";
import Container from "react-bootstrap/Container";

class Mobile extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="homepage__container--big">
            <div className="homepage__container--left">
              <h1 className="homepage__herofont">
                The app to scan food and alert expiry dates.
              </h1>
              <h3 className="homepage__herofont--small">
                The Savr app allows users to keep track of food items and
                consume them before their expiration dates
              </h3>

              <a href="https://play.google.com" target="blank">
                <img
                  src={Download}
                  alt="download"
                  className="download__button"
                />
              </a>
            </div>

            <div className="homepage__container--right">
              <img src={Mockup} alt="mockup" className="mockupimg" />
            </div>
          </div>
        </Container>

        <div className="benefit__container--big">
          <h1 className="benefit__herofont">Why do we stand out?</h1>
          <div className="benefit__container--small">
            <div className="benefit--wrapper">
              <img src={Scan} className="benefitimg" alt="" />
              <p className="benefit__paragraph">
                1. Scan food items using phone camera to store in your
                inventory.
              </p>
            </div>
            <div className="benefit--wrapper">
              <img src={Heart} className="benefitimg" alt="" />
              <p className="benefit__paragraph">
                2. Find recipes and create a meal plan that uses food that has
                been logged in your inventory. Food that is nearing the end of
                its shelf life will be used first.
              </p>
            </div>
            <div className="benefit--wrapper">
              <img src={Carrot} className="benefitimg" alt="" />
              <p className="benefit__paragraph">
                3. Enjoy good food and savour while you save! Favourite the
                recipes you love!
              </p>
            </div>
          </div>
        </div>
        <Container>
          <div className="prototype__container--big">
            <div className="prototype__container--left">
              <h1 className="prototype__herofont--small">How Savr works</h1>

              <p className="prototype__paragraph">
                <img src={Scan} className="prototype__icon" alt="" />Scan food
                items using phone camera to store in your inventory.
              </p>
              <p className="prototype__paragraph">
                <img src={Carrot} className="prototype__icon" alt="" />The items
                in your inventory will be sorted in order of expiry date.
              </p>
              <p className="prototype__paragraph">
                <img src={Search} className="prototype__icon" alt="" />Find
                recipes and create a meal plan for the upcoming week that uses
                food that has been logged in your inventory. Food that is
                nearing the end of its shelf life will be used first.
              </p>
              <p className="prototype__paragraph">
                <img src={Heart} className="prototype__icon" alt="" />Enjoy good
                food and savour while you save! Favourite the recipes you love!
              </p>
            </div>
            <div className="prototype__container--right">
              <img src={Discover} alt="mockup" className="prototypeimg" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Mobile;
