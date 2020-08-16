import React from "react";

import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import "./Card.Styles.css";

const Card = (props) => (
  <div className="card-container">
    <h2>{props.category}</h2>
    <p>Some info.</p>
    <p>
      <span className="card-list-span_left">Click Here</span>{" "}
      <span className="card-list-span_right">
        <ArrowLeftIcon />
      </span>
    </p>
  </div>
);

export default Card;
