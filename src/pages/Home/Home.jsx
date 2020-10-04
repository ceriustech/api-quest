// Home.jsx
import React, { useState, useEffect } from "react";

import "./Home.Styles.css";

const HomePage = () => {
  return (
    <div className="main-content_wrapper">
      <section className="main-content">
        <div className="content-grid_container">
          <div class="site-info_container">
            <h1 className="main-content_h1">Welcome to</h1>
            <h1 className="main-content_h1">
              <span className="main-content-span_top">API</span>{" "}
              <span className="main-content-span_bottom">Quest</span>
            </h1>
          </div>
          <div class="site-api-count_container ">
            <h1 className="main-content_h1">API Count</h1>
            <div>
              <p>
                <span>100</span>
                <span>API's and counting</span>
              </p>
            </div>
          </div>
          <div class="site-updates_container">
            <h1>
              <span>More</span> <span>API's</span>
            </h1>
            <h1>
              <span>To</span> <span>Come</span>
            </h1>
            <h1>
              <span>Stay</span> <span>Tunned!</span>
            </h1>
          </div>
          <div class="site-recommendations_container">
            <h1>
              <span>Have API</span> <span>Recommendations?</span>
            </h1>
            <p>
              <span>Contact us</span>
              <span>and let us know!</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
