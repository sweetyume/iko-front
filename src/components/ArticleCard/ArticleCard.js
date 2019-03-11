import React, { Component } from 'react';
import axios from 'axios';
import { globalPlug } from '../../contexts/UseContext';
import { withRouter } from 'react-router-dom';

require('../Card/Card.scss');

class ArticleCard extends Component {
	constructor() {
		super();
		this.state = { article: null, imgUrl: '' };
	}

	componentDidMount = () => {
		this.getArticlesDetails();
	};

	componentDidUpdate(prevProps) {
		console.log('=componentDidUpdate=', this.props.articleId);
		if (prevProps.articleId !== this.props.articleId) {
			this.getArticlesDetails();
		}
	}

	getArticlesDetails = () => {
		axios
			.get(`/articles/${this.props.articleId}`)
			.then(res => res.data)
			.then(article => {
				//transform buffer to 8bits unsign
				const arrayBufferView = new Uint8Array(article.file.data);
				const imgBlob = new Blob([arrayBufferView], { type: 'image/jpeg' });
				const imgUrl = URL.createObjectURL(imgBlob);
				this.setState({ article, imgUrl });
			})
			.catch(error => error);
	};

	render() {
		const { article, imgUrl } = this.state;
		return (
			<div className="Card" onClick={this.props.onClick}>
				<img
					className="Card__Image"
					src={
						article && imgUrl
							? imgUrl
							: 'https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Deer&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Pale'
					}
				/>
				<div className="Card__Description">
					<p className="Card__Description__Country">
						{article ? article.country : 'France'}
					</p>
					<p className="Card__Description__Title">
						{article ? article.title : 'France'}
					</p>
				</div>
			</div>
		);
	}
}
export default globalPlug(ArticleCard);
