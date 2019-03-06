import React from 'react';
require('./Button.scss');

const Button = props => {
	return (
		<button className="Button" onClick={props.onClick} value={props.children}>
			{props.label}
			{props.children}
		</button>
	);
};
export default Button;
