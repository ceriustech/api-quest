import React from 'react';

const HandleInputChange = ({ setSearch }) => {
	const handleInputSearchChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	return handleInputSearchChange;
};

export default HandleInputChange;
