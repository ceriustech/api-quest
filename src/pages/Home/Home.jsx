// Home.jsx
import React from "react";

import SiteInfoLogo from "../../Assets/home-page-img-2.png";

import SearchIcon from '@material-ui/icons/Search';
import MouseIcon from '@material-ui/icons/Mouse';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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
                  <p><span>A simple tool</span><span>to help you quickly find api's.</span></p>
                  <div className="site-info-img_container">
                    <img src={SiteInfoLogo} alt="" />
                  </div>
                </div>
                <h2>Search in three easy steps.</h2>
                <div className="site-info-bottom_content">
                  <div className="site-info-search-steps">
                    <p><span className="number-point">1</span> <span>Search</span> <SearchIcon style={{color: "#e63956"}}/> for an api category.</p>
                  </div>
                  <div className="site-info-search-steps">
                    <p><span className="number-point">2</span> <span>Click</span> <MouseIcon style={{color: "#e63956"}}/> on the category of choice.</p>
                  </div>
                  <div className="site-info-search-steps">
                    <p><span className="number-point">3</span> <span>Pick</span> <NaturePeopleIcon style={{color: "#e63956"}}/> an api to use from the list.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="site-api-count_container ">
            <h1 className="home-content-h1">
              <span style={{ color: "#e63956" }}>API</span> <span>Count</span>
            </h1>
            <div className="site-api-count_content">
              <div className="site-api-counter_container">
                <div className="site-api-counter-span-icon">
                  <SettingsIcon style={{color: "#3cc0f8", fontSize: "8em"}} />
                </div>
                <p className="site-api-counter">
                  <span className="site-api-counter-span-counter">100</span>
                  <span className="site-api-counter-text">API's</span>
                </p>
              </div>
              <p className="site-api-counter_mssg"> And counting...</p>
            </div>
          </div>
          <div class="site-updates_container">
            <h1 className="home-content-h1">
              <span>More</span> <span style={{ color: "#e63956" }}>API's</span>{" "}
              <span>To</span> <span style={{ color: "#e63956" }}>Come</span>
            </h1>
            <h1 className="home-content-h1">
              <span>Stay</span>{" "}
              <span style={{ color: "#e63956" }}>Tuned!</span>
            </h1>
            <div className="site-updates-text_container">
              <p>We will continue to<br />add api's to our ever growing list.</p>
              <p style={{color: "#3cc0f8"}}>Want to stay up to date?</p>
              <div className="site-updates-cta_container">
                <p className="cta-button">Click here to stay informed!</p>
              </div>
            </div>
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
