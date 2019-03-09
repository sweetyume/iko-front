import React from 'react';

require('./DisplayArticle.scss');

const DisplayArticle = ({ title, country, imgUrl, description }) => {
	return (
		<div className="DisplayArticle">
			<div className="DisplayArticle__Header">
				<h2 className="DisplayArticle__Header__Title">{title}</h2>
				<h3 className="DisplayArticle__Header__Country">{country}</h3>
			</div>

			<div className="DisplayArticle__Content">
				<img className="DisplayArticle__Content__Image" src={imgUrl} />
				<div className="DisplayArticle__Content__Description">
					{description}
				</div>
			</div>
		</div>
	);
};

export default DisplayArticle;
