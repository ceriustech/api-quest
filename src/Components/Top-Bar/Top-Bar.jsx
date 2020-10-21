import React from "react";

import TwitterIcon from '@material-ui/icons/Twitter';

import "./Top-Bar.Styles.css";

const TopBar = () => {
  return (
    <div className="top-bar-content-wrapper top-bar">
      <div className="top-bar-content">
        <div className="text-item">
          <TwitterIcon />
        </div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default TopBar;
