import React from 'react';
import Card from '../Card/Card';

import { categoryinfo } from '../../Data/category.data.js';

import '../../Styles/Card-List/Card-List.scss';
//test
const CardList = ({ categories }) => {
	return (
		<div className="card-list">
			{categories.map((category, index) => {
				if (!categoryinfo[category]) {
					return null;
				}

				const { icon, summaryText, url, backgroundColor, iconColor } =
					categoryinfo[category];

				return (
					<Card
						key={index}
						category={category}
						icon={icon}
						summaryText={summaryText}
						backgroundColor={backgroundColor}
						iconColor={iconColor}
						url={url}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
