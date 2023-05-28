import React from "react";
import interest from "../assets/interest.png";

function Keen() {
  return (
    <div className="keen__section">
      <div className="keen__container">
        <div className="keen__left">
          <h1 className="keen__title">
            We’re Keen On <span>Transparency</span>
          </h1>
          <p className="keen__subtitle">
            {" "}
            Calculate your interests everytime you save on our platform
          </p>
          <button className="keen__cta">Get Started</button>
        </div>
        <div className="keen__right">
          <img src={interest} alt="interest" />
        </div>
      </div>
    </div>
  );
}

export default Keen;
