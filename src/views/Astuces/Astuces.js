import React, { Component } from 'react';
import Section from '../../components/Section/Section';
import { DisplayArticle } from '../../components/DisplayArticle/DisplayArticle';

class Astuces extends Component {
	state = {
		articleToDisplay: '',
		articles: []
	};
	componentDidMount() {}
	render() {
		const { isAuth } = this.state;
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
					<p>vous devez être authentifié pour voir le contenu</p>
				)}
			</Section>
		);
	}
}

export default Astuces;
