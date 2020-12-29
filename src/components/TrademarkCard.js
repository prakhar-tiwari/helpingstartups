import React from "react";
import "./Card.scss";

function TrademarkCard({ heading, listItems, price }) {
  return (
    <div key={heading} className="trademark-card" data-aos="zoom-in">
      <div className="trademark-card__side trademark-card__side--front">
        <div className="trademark-card__heading">
          <span className="trademark-card__heading-span">{heading}</span>
        </div>
        <div className="trademark-card__details">
          <div className="trademark-card__price-box">
            <h3>&#8377; {price} / All Inclusive</h3>
          </div>
          <ul>
            {listItems.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="trademark-card__side trademark-card__side--back trademark-card__side--back-1">
        <div className="trademark-card__cta">
          <a href="#popup" className="custom-btn custom-btn--white">
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrademarkCard;
