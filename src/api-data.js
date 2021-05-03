import axios from 'axios';

import apiData from './Data/api-data.json';

export const APICategories = () => {
	return axios
		.get(`https://api.publicapis.org/categories`)
		.then((response) => response.data)
		.then((apiCategories) => {
			console.log(apiCategories);
			return apiCategories;
		})
		.catch((error) => {
			console.log(`Looks like there was a problem ${error}`);
		});
};

export const subCategoryList = (category) => {
	return axios
		.get(`https://api.publicapis.org/entries?category=${category}&https=true`)
		.then((response) => response.data)
		.then((subApiCategory) => {
			console.log(`Sub-Category: ${subApiCategory}`);
			return subApiCategory;
		})
		.catch((error) => {
			console.log(`Looks like there was a problem ${error}`);
		});
};

const testAsyncFunction = async (category) => {
	const response = await fetch(
		`https://api.publicapis.org/entries?category=${category}&https=true`
	);
	const json = await response.json();
	console.log(`%cJSON SUBCATEGORY DATA:`, 'font-size: 1.5em; color: red');
	return json;
};

testAsyncFunction('Transportation').then((data) => {
	console.log('After Querying subcategory');
	console.log(data);
});
