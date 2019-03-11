import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';

import { globalPlug } from '../../contexts/UseContext';
import imageBaseURL from '../../assets/images/astuce1.png';
require('./Astuces.scss');

const content = [
	{
		id: 1,
		imgUrl: imageBaseURL,
		title: 'Comment gérer son budget?',
		description:
			'Voyager permet de découvrir de nouveaux horizons, de profiter de .'
	},
	{
		id: 2,
		imgUrl: imageBaseURL,
		title: 'Comment gérer son budget?',
		description:
			'Voyager permet de découvrir de nouveaux horizons, de profiter de .'
	},
	{
		id: 3,
		imgUrl: imageBaseURL,
		title: 'Comment gérer son budget?',
		description:
			'Voyager permet de découvrir de nouveaux horizons, de profiter de .'
	}
];
class Astuces extends Component {
	state = {
		articleToDisplay: '',
		articles: []
	};
	render() {
		const { isAuth } = this.props;
		const allAstuces = content.map((astuce, index) => {
			return (
				<Card
					className-="Astuces__Container__Card"
					key={astuce.id}
					title={astuce.title}
					imgUrl={imageBaseURL}
				/>
			);
		});
		return (
			<React.Fragment>
				{isAuth ? (
					<div className="Astuces">
						<h2>Conseils et Astuces</h2>
						<div className="Astuces__Container">{allAstuces}</div>
					</div>
				) : (
					<Section className="Astuces" title="Conseils et Astuces">
						<p>Vous devez être authentifié pour voir le contenu</p>
					</Section>
				)}
			</React.Fragment>
		);
	}
}

export default globalPlug(withRouter(Astuces));
