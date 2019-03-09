import React from 'react';
import { NavLink, Link } from 'react-router-dom';

require('./Nav.scss');

const Nav = () => {
	return (
		<nav className="Nav">
			<ul className="Nav_List">
				<li className="Nav_List_Item">
					<NavLink to="/destinations">Destinations</NavLink>
				</li>
				<li className="Nav_List_Item">
					<NavLink to="/programmes">Programmes</NavLink>
				</li>
				<li className="Nav_List_Item">
					<NavLink to="/articles">Articles</NavLink>
				</li>
				<li className="Nav_List_Item">
					<NavLink to="/astuces">Conseils et Astuces</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
