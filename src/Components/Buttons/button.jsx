import React from 'react';

import '../../Styles/Buttons/Button.scss';

const CustomButton = ({ children, isInverted, ...otherProps }) => {
	return (
		<button
			className={`${isInverted ? 'custom-button' : ''} cta-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
