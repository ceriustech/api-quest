import React from 'react';

import URLButtons from '../Buttons/URL-Buttons';

import '../../Styles/Sub-Category/Mobile-Sub-Category.scss';

const MobileSubCategory = () => {
	return (
		<section className="mobile-sub-category-container">
			<div className="mobile-sub-category-info">
				<div className="api-name-container">
					<p className="api-info-header">API</p>
					<p>API Name</p>
				</div>
				<div className="api-description-container">
					<p className="api-info-header">Description</p>
					<p>
						Access real-time and historical data of any and all airborne
						aircraft.
					</p>
				</div>
				<div className="api-auth-container">
					<p className="api-info-header">Auth</p>
					<p>Yes</p>
				</div>
				<div className="api-http-container">
					<p className="api-info-header">HTTPS</p>
					<p>Yes</p>
				</div>
				<div className="api-cors-container">
					<p className="api-info-header">Cors</p>
					<p>Yes</p>
				</div>
				<div className="api-url-container">
					<p className="api-info-header">URL</p>
					<div className="api-url">
						<URLButtons />
					</div>
				</div>
			</div>
		</section>
	);
};

export default MobileSubCategory;
