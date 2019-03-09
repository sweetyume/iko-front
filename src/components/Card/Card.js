import React from 'react';

require('./Card.scss');

const Card = ({ title, country, imgUrl, clicked }) => {
	return (
		<div className="Card" onClick={clicked}>
			<img className="Card__Image" src={imgUrl} />
			<div className="Card__Description">
				<p className="Card__Description__Country">{country}</p>
				<p className="Card__Description__Title">{title}</p>
			</div>
		</div>
	);
};
export default Card;
