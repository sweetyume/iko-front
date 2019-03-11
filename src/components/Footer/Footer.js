import React from 'react';
import { Link } from 'react-router-dom';

require('./Footer.scss');

const Footer = () => {
	return (
		<footer className="Footer">
			<div>
				<ul className="Footer__List">
					<li className="Footer__List__Item">
						<Link to="/about">A propos</Link>
					</li>
					<li className="Footer__List__Item">
						<Link to="/about">Contact</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
