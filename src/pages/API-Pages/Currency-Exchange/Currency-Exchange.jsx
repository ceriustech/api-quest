import React from 'react';

import SubCategoryList from '../../../Components/Sub-Category-List/Sub-Category-List';

const CurrencyExchange = (props) => {
	console.log(props);
	return (
		<div className="main-content_wrapper currency-exchange">
			<section className="category-content">
				<h1>Currency Exchange Page</h1>
				<SubCategoryList />
			</section>
		</div>
	);
};

export default CurrencyExchange;
