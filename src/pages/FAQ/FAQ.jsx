import React from 'react';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './FAQ.Styles.css';

const FAQPage = () => (
	<div className="main-content_wrapper">
		<h1 className="faq-header">Getting started with API Quest</h1>
		<section className="faq-page_content">
			<div className="faq-info_container">
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>What is API Quest?</h2>
					</div>
					<p>
						API Quest is a site for quickly searching through a compiled list of
						api's and quickly getting the ones you need.
					</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>Is there any cost?</h2>
					</div>
					<p>
						No. The goal is to make this a free service for as long as possible.
					</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>Will there be new api's added to the list?</h2>
					</div>
					<p>Yes, new api's will definitely be added.</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>
							Do you take suggestions about api's that can be added to the list?
						</h2>
					</div>
					<p>
						Definitely. Contact us and we'll look at the api your suggestions.
						If it meets all of our criteria, it'll be added to the list and
						displayed on the site.
					</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>Can I be notified when new api's are added to the list?</h2>
					</div>
					<p>
						Yes. There are two ways you can be notified about new api's,
						noitifications, and signing up for our email list.
					</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>Can I create an account?</h2>
					</div>
					<p>
						No, not at this time. We'll wait to see if there's enough site
						engagement from the community and interest in creating accounts.
					</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>Can I rate api's?</h2>
					</div>
					<p>
						No, not at this time. However, that'll definitely be coming very
						soon in a future update.
					</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>Is there a comment section for the api's?</h2>
					</div>
					<p>
						No, not at this time. However, that'll definitely be coming very
						soon in a future update along with a rating system for the api's. We
						think that community engagement and feedback about the api's in our
						list is very important and want feedback so we can build a list of
						the best api's available for devs.
					</p>
				</div>
				<div className="faq-info_text">
					<div className="faq-info-header">
						<FiberManualRecordIcon
							style={{ color: '#e63956', width: '.75em', height: '.75em' }}
						/>
						<h2>How do you gather data for the api's?</h2>
					</div>
					<p>
						We've created our on api for api's that serve up all the data for
						the api's on the site. This decision was made so that we can
						maintain ownership and control over the data. Creating our own api
						also gives us the ability to add and subtract from the list as
						needed.
					</p>
				</div>
			</div>
		</section>
	</div>
);

export default FAQPage;
