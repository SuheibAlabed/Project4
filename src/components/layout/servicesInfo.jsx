import React from "react";
import "./servicesinfo.css";
import Img1 from "../../images/webApp.jpg";

import { Link } from "react-router-dom";

export default function Servicesbrief(params) {
  return (
    <div className="w-brief-container">
      <div className="w-image-container">
        <img className="w-image" src={Img1} alt=""></img>
      </div>
      <div className="w-content-container">
        <h3>Services</h3>
        <p>
          Web Design with your customer in mind. Modern web design is more
          involved than creating an attractive website. Consideration of user
          experience, search engine optimization, ease of use, and technical
          details are just a few elements that are involved in developing a
          website that is designed to perform in today’s competitive
          marketplace.
        </p>
        <button className="w-info-item btn-nav-item">
          <Link to="/" className="w-info-links btn-info">
            Show More
          </Link>
        </button>
      </div>
    </div>
  );
}
