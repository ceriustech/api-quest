import React from "react";

import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import "./Card.Styles.css";

const Card = ({
  category,
  summaryText,
  icon: Icon,
  backgroundColor,
  iconColor,
}) => (
  <div className="card-container">
    <Icon
      style={{
        width: "45px",
        height: "45px",
        backgroundColor: backgroundColor,
        borderRadius: "8px",
        color: iconColor,
        padding: "5px",
      }}
    />
    <h2>{category}</h2>
    <p>{summaryText}</p>
    <p>
      <span className="card-list-span_left">Click Here</span>{" "}
      <span className="card-list-span_right">
        <ArrowLeftIcon />
      </span>
    </p>
  </div>
);

export default Card;
