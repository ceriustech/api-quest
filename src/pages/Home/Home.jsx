// Home.jsx
import React from "react";

import SiteInfoLogo from "../../Assets/home-page-img.png";

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
              <span className="home-content-span_bottom">Quest!</span>
            </h1>
            <div className="site-info_content">
              <div className="site-info_text">
                <div className="site-info-top_content">
                  <p>A simple tool that will help you quickly find api's</p>
                  <div className="site-info-img_container">
                    <img src={SiteInfoLogo} alt="" />
                  </div>
                </div>
                <h2>Search in three easy steps.</h2>
                <div className="site-info-bottom_content">
                  <div className="site-info-search-steps">
                    <h3>Step 1</h3>
                    <p>Search for an api category.</p>
                  </div>
                  <div className="site-info-search-steps">
                    <h3>Step 2</h3>
                    <p>CLick on the category of choice.</p>
                  </div>
                  <div className="site-info-search-steps">
                    <h3>Step 3</h3>
                    <p>Pick an api to use from the list.</p>
                  </div>
                </div>
              </div>
            </div>
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
              <span>More</span> <span style={{ color: "#e63956" }}>API's</span>{" "}
              <span>To</span> <span style={{ color: "#e63956" }}>Come</span>
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
