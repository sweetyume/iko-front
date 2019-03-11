import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';

import { globalPlug } from '../../contexts/UseContext';
import imageBaseURL1 from '../../assets/images/astuce1.png';
import imageBaseURL2 from '../../assets/images/astuce2.png';
import imageBaseURL3 from '../../assets/images/astuce3.png';

require('./Astuces.scss');

const content = [
	{
		id: 1,
		imgUrl: imageBaseURL1,
		title: 'Comment gérer son budget?',
		description:
			'Voyager permet de découvrir de nouveaux horizons, de profiter de .'
	},
	{
		id: 2,
		imgUrl: imageBaseURL2,
		title: `Comment s'habiller en voyage?`,
		description:
			'Voyager permet de découvrir de nouveaux horizons, de profiter de .'
	},
	{
		id: 3,
		imgUrl: imageBaseURL3,
		title: '5 conseils pour un voyage seul autour du monde',
		description:
			'Voyager permet de découvrir de nouveaux horizons, de profiter de .'
	}
];
class Astuces extends Component {
	state = {
		astuces: []
	};
	render() {
		const { isAuth } = this.props;
		const allAstuces = content.map((astuce, index) => {
			return (
				<Card
					className-="Astuces__Container__Card"
					key={astuce.id}
					title={astuce.title}
					imgUrl={astuce.imgUrl}
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
