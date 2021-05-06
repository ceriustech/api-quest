import React from 'react';


import URLButtons from '../Buttons/URL-Buttons';

import './Sub-Category.Styles.css';

const SubCategory = (props) => {
	return (
		<section className="sub-category-container">
			<div className="sub-category-info">
				<p className="sub-category-info-text">API Name</p>
				<p className="sub-category-info-text">
					Access real-time and historical data of any and all airborne aircraft
				</p>
				<p className="sub-category-info-text">Yes</p>
				<p className="sub-category-info-text">Yes</p>
				<p className="sub-category-info-text">Yes</p>
				
					<URLButtons />
			</div>
		</section>
	);
};

export default SubCategory;
