import React from "react";

const Card = (props) => (
  <div className="card-container">
    <h2>{props.category}</h2>
    <p>Some info.</p>
  </div>
);

export default Card;
