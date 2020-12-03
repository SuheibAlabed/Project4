import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testmo.css";
import Img1 from "../../images/webApp.jpg";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={Img1} alt="Mohammad Image" />
          <div className="myCarousel">
            <h3>Ahamd Mohammad</h3>
            <h4>Designer</h4>
            <p>
              I highly recommend W-ebSite Services they helped me biuld my own
              online bussiness.
            </p>
          </div>
        </div>

        <div>
          <img src={Img1} alt="Mohammad Image" />
          <div className="myCarousel">
            <h3>Ahamd Mohammad</h3>
            <h4>Designer</h4>
            <p>
              I highly recommend W-ebSite Services they helped me biuld my own
              online bussiness.
            </p>
          </div>
        </div>

        <div>
          <img src={Img1} alt="Mohammad Image" />
          <div className="myCarousel">
            <h3>Ahamd Mohammad</h3>
            <h4>Designer</h4>
            <p>
              I highly recommend W-ebSite Services they helped me biuld my own
              online bussiness.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
