import React from "react";

import "./Card.Styles.css";

const Card = (props) => (
  <div className="card-container">
    <h2>{props.category}</h2>
    <p>Some info.</p>
    <p>Look at {props.category} api's</p>
  </div>
);

export default Card;
