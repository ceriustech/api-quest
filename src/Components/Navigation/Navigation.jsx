import React from "react";

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
          <h1>API Quest</h1>
          <DoubleArrowIcon
            style={{
              width: "35px",
              height: "35px",
              transform: "rotate(180deg)",
            }}
          />
        </div>
        <Link className="home nav-item" to="/">
          <HomeOutlinedIcon />
          <p>Home</p>
        </Link>
        <div className="categories link-item">
          <CategoryOutlinedIcon />
          <p>Categories</p>
        </div>
        <Link className="about nav-item" to="/about">
          <InfoOutlinedIcon />
          <p>About</p>
        </Link>
        <Link className="faq nav-item" to="/faq">
          <HelpOutlineOutlinedIcon />
          <p>FAQ</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
