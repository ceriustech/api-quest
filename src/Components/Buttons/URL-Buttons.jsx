import React from 'react';

import '../../Styles/Buttons/URL-Button.scss';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const URLButtons = () => {
	return (
		<div className="button-link-container">
			<a
				className="button-link"
				href="https://developers.amadeus.com/self-service"
				target="_blank"
			>
				<p className="button-link_p">
					<span className="button-link-span_left">Click Here</span>
					<span className="button-link-span_right">
						<ArrowLeftIcon />
					</span>
				</p>
			</a>
		</div>
	);
};

export default URLButtons;
