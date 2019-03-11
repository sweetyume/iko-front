import React from 'react';
import { NavLink } from 'react-router-dom';

require('./Nav.scss');

const Nav = () => {
	return (
		<nav className="Nav">
			<ul className="Nav__List">
				<li className="Nav__List__Item">
					<NavLink to="/destinations">Destinations</NavLink>
				</li>
				<li className="Nav__List__Item">
					<NavLink to="/programmes">Programmes</NavLink>
				</li>
				<li className="Nav__List__Item">
					<NavLink to="/articles">Articles</NavLink>
				</li>
				<li className="Nav__List__Item">
					<NavLink to="/astuces">Conseils et Astuces</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
