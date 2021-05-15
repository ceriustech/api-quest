import React from 'react';
import Card from '../Card/Card';

import { categoryinfo } from '../../Data/category.data.js';

import '../../Styles/Card-List/Card-List.scss';

const CardList = (props) => {
	console.log(props);
	return (
		<div className="card-list">
			{props.categories.map((category, index) => {
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
