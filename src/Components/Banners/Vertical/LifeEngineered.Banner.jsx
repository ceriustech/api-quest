import React, { useEffect, useState } from 'react';

import CountdownClock from '../../CountdownClock/CountdownClock';
import '../../../Styles/Banners/Vertical/Lifengineered.scss';

const LifengineeredVerticalBanner = () => {
	return (
		<div className="le-banner-container">
			<a
				href="https://lifengineered.com/"
				target="_blank"
				className="ad-banner-le"
			></a>
			<div className="le-banner-content">
				<div className="le-banner-header">
					<p>
						<span>L</span>
						<span>E</span>
						<span>A</span>
						<span>R</span>
						<span>N</span> <span>H</span>
						<span>O</span>
						<span>W</span>
					</p>
					<p>to become a developer!</p>
				</div>
				<div className="le-banner-mssg">
					<p>Go to</p>
					<p>
						Lif<span>E</span>ngineered
					</p>
				</div>
			</div>
			<p>Starts in:</p>
			<CountdownClock />
		</div>
	);
};

export default LifengineeredVerticalBanner;
