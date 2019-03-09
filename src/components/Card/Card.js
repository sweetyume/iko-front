import React from 'react';

require('./Card.scss');

const Card = ({ title, country, imgUrl, clicked }) => {
	return (
		<div className="Card" onClick={clicked}>
			<img className="Card_Image" src={imgUrl} />
			<div className="Card_Description">
				<p className="Card_Description_Country">{country}</p>
				<p className="Card_Description_Title">{title}</p>
			</div>
		</div>
	);
};
export default Card;
