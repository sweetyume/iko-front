import React from 'react';

require('./DisplayArticle.scss');

const DisplayArticle = ({ title, country, imgUrl, description }) => {
	return (
		<div className="DisplayArticle">
			<div className="DisplayArticle_Header">
				<h2 className="DisplayArticle_Header_Title">{title}</h2>
				<h3 className="DisplayArticle_Header_Country">{country}</h3>
			</div>

			<div className="DisplayArticle_Content">
				<img className="DisplayArticle_Content_Image" src={imgUrl} />
				<div className="DisplayArticle_Content_Description">{description}</div>
			</div>
		</div>
	);
};

export default DisplayArticle;
