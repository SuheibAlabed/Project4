import React from "react";
import { Link } from "react-router-dom";
const Form = (props) => {
  const handleCity = (e) => {
    localStorage.setItem("City", e.target.value);
  };
  const handleCountry = (e) => {
    localStorage.setItem("Country", e.target.value);
  };

  const printValue = () => {
    console.log("City: " + localStorage.getItem("City"));
    console.log("Country: " + localStorage.getItem("Country"));
  };

  return (
    <div>
      <div className="row">
        <div className="text-box">
          <input
            type="text"
            className="formControl"
            name="CIty"
            autoComplete="off"
            placeholder="City..."
            onChange={handleCity}
          />
        </div>
        <div className="text-box">
          <input
            type="text"
            className="formControl"
            name="Country"
            autoComplete="off"
            placeholder="Country..."
            onChange={handleCountry}
          />
        </div>
        <div className="text-box">
          <Link to="/Profile">
            <button className="btnWeather" onClick={printValue}>
              Get Weather
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
