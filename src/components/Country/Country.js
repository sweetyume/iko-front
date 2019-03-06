import React from 'react';

const Country = props => {
	return (
		<div className="Country">
			<p>{props.name}</p>
			<p>{props.region}</p>
			<p>{props.capital}</p>
			<p>{props.population}</p>
			<p>{props.currencies}</p>
		</div>
	);
};

export default Country;
