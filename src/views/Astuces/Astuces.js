import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Section from '../../components/Section/Section';
import { globalPlug } from '../../contexts/UseContext';

class Astuces extends Component {
	state = {
		articleToDisplay: '',
		articles: []
	};
	render() {
		const { isAuth } = this.props;
		return (
			<Section className="Astuces" title="Conseils et Astuces">
				{isAuth ? (
					<p className="Astuces__Content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
						sed consectetur modi exercitationem reprehenderit, architecto odit
						optio totam non assumenda necessitatibus mollitia consequatur
						officia aperiam porro? Officiis magni perspiciatis nemo! Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Nostrum voluptatum
						laudantium quasi sed quod reiciendis cupiditate illo illum? Dolores
						veniam perferendis officia aliquam quaerat! Soluta libero ipsam sint
						officiis quisquam."
					</p>
				) : (
					<p>Vous devez être authentifié pour voir le contenu</p>
				)}
			</Section>
		);
	}
}

export default globalPlug(withRouter(Astuces));
