import React from "react";

import { Switch, Route, Link } from "react-router-dom";

import Animals from "../../pages/API-Pages/Animals/Animals";
import Anime from "../../pages/API-Pages/Anime/Anime";
import AntiMalware from "../../pages/API-Pages/Anti-Malware/Anti-Malware";
import ArtDesign from "../../pages/API-Pages/Art-Design/Art-Design";
import Books from "../../pages/API-Pages/Books/Books";
import Business from "../../pages/API-Pages/Business/Business";
import Calendar from "../../pages/API-Pages/Calendar/Calendar";
import CloudStorageFileSharing from "../../pages/API-Pages/Cloud-Storage-File-Sharing/Cloud-Storage-File-Sharing";
import ContinuousIntegration from "../../pages/API-Pages/Continuous-Integration/Continuous-Integration";
import Cryptocurrency from "../../pages/API-Pages/Cryptocurrency/Cryptocurrency";
import CurrencyExchange from "../../pages/API-Pages/Currency-Exchange/Currency-Exchange";
import DataValidation from "../../pages/API-Pages/Data-Validation/Data-Validation";

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
