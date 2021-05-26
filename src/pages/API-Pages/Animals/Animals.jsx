import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { subCategoryList } from '../../../api-data';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';
import LifengineeredBanner from '../../../Components/Banners/Vertical/LifeEngineered.Banner';
import SearchField from '../../../Components/Search-Field/Search-Field';

import { capitalizeAPICategoryName } from '../../../Helper-Functions/HelperFunctions';

import '../../../Styles/Sub-Category-Page/Sub-Category-Page.scss';

const Animals = () => {
	const [subCategory, setSubCategory] = useState([]);

	const urlLocation = useLocation();

	const apiCategoryName = urlLocation.pathname.replace('/', '');

	console.log(`%cURL ID:`, 'font-size: 1.5em; color: red;');
	console.log(urlLocation);

	console.log('SubCategory Data:', subCategory);

	return (
		<div className="main-content_wrapper animals">
			<h1>{capitalizeAPICategoryName(apiCategoryName)} API's</h1>
			<SearchField />
			<div className="sub-category-content-container">
				<section className="sub-category-content">
					<SubCategoryList urlPath={'path'} />
				</section>
				<section className="ad-section">
					<LifengineeredBanner />
				</section>
			</div>
		</div>
	);
};

export default Animals;
