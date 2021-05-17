import React, { useState, useEffect } from 'react';

import { subCategoryList } from '../../../api-data';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';
import LifengineeredBanner from '../../../Components/Banners/Vertical/LifeEngineered.Banner';

import '../../../Styles/Sub-Category-Page/Sub-Category-Page.scss';

const Animals = () => {
	const [subCategory, setSubCategory] = useState([]);

	const path = window.location.pathname.replace('/', '');

	const subCategories = useEffect(() => {
		subCategoryList(path).then((data) => {
			setSubCategory(data);
			console.log(data);
		});
	}, []);

	console.log('SubCategory Data:', subCategory);

	return (
		<div className="main-content_wrapper animals">
			<h1>Animals Page</h1>
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
