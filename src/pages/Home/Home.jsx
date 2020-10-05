// Home.jsx
import React, { useState, useEffect } from "react";

import "./Home.Styles.css";

const HomePage = () => {
  return (
    <div className="main-content_wrapper">
      <section className="home-content">
        <div className="content-grid_container">
          <div className="site-info_container">
            <h1 className="home-content-h1">
              <span>Welcome</span> <span style={{ color: "#e63956" }}>to</span>
            </h1>
            <h1 className="home-content-h1">
              <span
                className="home-content-span_top"
                style={{ color: "#e63956" }}
              >
                API
              </span>{" "}
              <span className="home-content-span_bottom">Quest</span>
            </h1>
          </div>
          <div class="site-api-count_container ">
            <h1 className="home-content-h1">
              <span style={{ color: "#e63956" }}>API</span> <span>Count</span>
            </h1>
            <div>
              <p>
                <span>100</span>
                <span>API's and counting</span>
              </p>
            </div>
          </div>
          <div class="site-updates_container">
            <h1 className="home-content-h1">
              <span>More</span> <span style={{ color: "#e63956" }}>API's</span>
            </h1>
            <h1 className="home-content-h1">
              <span style={{ color: "#e63956" }}>To</span> <span>Come</span>
            </h1>
            <h1 className="home-content-h1">
              <span>Stay</span>{" "}
              <span style={{ color: "#e63956" }}>Tunned!</span>
            </h1>
          </div>
          <div class="site-recommendations_container">
            <h1 class="home-content-h1">
              <span>Have API</span>{" "}
              <span style={{ color: "#e63956" }}>Recommendations?</span>
            </h1>
            <h1 className="home-content-h1">
              <span style={{ color: "#e63956" }}>Contact us</span>{" "}
              <span>and let us know!</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
