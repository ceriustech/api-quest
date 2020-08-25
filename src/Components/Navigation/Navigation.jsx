import React, { Children } from "react";

import { Link } from "react-router-dom";

// Material UI Icons
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

import "./Navigation.Styles.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <nav className="sidebar">
        <div className="app-title">
          <h1>
            <span className="app-title-span_left">API</span>{" "}
            <span className="app-title-span_right">Quest</span>
          </h1>
          <DoubleArrowIcon
            className="icon-colors"
            style={{
              width: "35px",
              height: "35px",
              transform: "rotate(180deg)",
            }}
          />
        </div>
        <Link className="home-link nav-item" to="/">
          <HomeOutlinedIcon className="nav-icon" />
          <p>Home</p>
        </Link>
        <div className="categories-link_container link-item">
          <CategoryOutlinedIcon className="nav-icon" />
          <p>Categories</p>
        </div>
        <Link className="about-link nav-item" to="/about">
          <InfoOutlinedIcon className="nav-icon" />
          <p>About</p>
        </Link>
        <Link className="faq-link nav-item" to="/faq">
          <HelpOutlineOutlinedIcon className="nav-icon" />
          <p>FAQ</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
