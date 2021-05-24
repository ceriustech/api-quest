// Search-Field.jsx
import React from 'react';

import './Search-Field.Styles.css';

const SearchField = ({ handleChange }) => {
	return (
		<input
			className="search"
			type="search"
			placeholder="search api's here..."
			onChange={handleChange}
		/>
	);
};

export default SearchField;
