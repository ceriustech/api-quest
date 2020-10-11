import React from "react";

import './FAQ.Styles.css';

const FAQPage = () => (
  <div className="main-content_wrapper">
    <section className="faq-page_content">
      <h1 className="faq-header">Getting started with API Quest</h1>
      <div className="faq-info_container">
        <div className="faq-info_text">
          <h2>What is API Quest?</h2>
          <p>API Quest is a site for quickly searching through a compiled list of api's.</p>
        </div>
        <div className="faq-info_text">
          <h2>Is there any cost?</h2>
          <p>No. The goal is to make this a free service for as long as possible.</p>
        </div>
        <div className="faq-info_text">
          <h2>Will there be new api's added to the list?</h2>
          <p>Yes. There are two ways you can be notified about new api's, noitifications, and signing up for our email list.</p>
        </div>
        <div className="faq-info_text">
          <h2>Do you take suggestions about api's that can be added to the list?</h2>
          <p>Definitely. contact us and we'll look at the api your suggestions. You can also can more priority for your suggestions by signing up for notifications.</p>
        </div>
        <div className="faq-info_text">
          <h2>Can I be notified when new api's are added to the list?</h2>
          <p>Yes. There are two ways you can be notified about new api's, noitifications, and signing up for our email list.</p>
        </div>    
        <div className="faq-info_text">
          <h2>Can I create an account?</h2>
          <p>No, not at this time. We'll wait to see if there's enough site engagement from the community and interest in creating accounts.</p>
        </div>
        <div className="faq-info_text">
          <h2>Can I rate api's?</h2>
          <p>No, not at this time. However, that'll definitely be coming in a future update.</p>
        </div> 
        <div className="faq-info_text">
          <h2>How do you gather data for the api's?</h2>
          <p>We're currently gathering api data from github Public API's. However, we're currently creating our own api for both free and paid public api's that will allow this service to be more expansive and useful for anyone using this service.</p>
        </div> 
      </div>
    </section>
  </div>
);

export default FAQPage;
