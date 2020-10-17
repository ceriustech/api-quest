import React from 'react';

import './button.styles.css';

const CustomButton = ({ children, isInverted, ...otherProps }) => {
    return (
        <button className={`${isInverted ? 'custom-button': ''} cta-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton; 