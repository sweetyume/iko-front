
import React from 'react';
import Logo from '../Logo/Logo';

require ('./Nav.scss');

const Nav = () => {
    return (
        <nav className="Nav">
            <Logo/>
            <a href="#">Destinations</a>
            <a href="#">Réseaux</a>
            <a href="#">Ressources</a>
            <a href="#">Concept</a>
        </nav>
    )
}

export default Nav;