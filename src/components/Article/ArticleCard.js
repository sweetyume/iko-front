import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

require('../Card/Card.scss');

class ArticleCard extends Component {
	constructor() {
		super();
		this.state = { article: null, imgUrl: '' };
	}
	// componentDidMount() {
	// 	axios
	// 		.get(`/articles/${this.props.articleId}`)
	// 		.then(res => res.data)
	// 		.then(article => {
	// 			//transform buffer to 8bits unsign
	// 			const arrayBufferView = new Uint8Array(article.file.data);
	// 			const imgBlob = new Blob([arrayBufferView], { type: 'image/jpeg' });
	// 			const imgUrl = URL.createObjectURL(imgBlob);
	// 			this.setState({ article, imgUrl });
	// 		})
	// 		.catch(error => error);
	// }
	getArticleDetails() {
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
	}
	componentDidMount() {
		this.getArticleDetails();
	}

	componentDidUpdate(prevProps) {
		console.log('=componentDidUpdate=', this.props.articleId);
		if (prevProps.articleId !== this.props.articleId) {
			this.getArticleDetails();
		}
	}

	render() {
		const { article, imgUrl } = this.state;
		return (
			<div className="Card">
				<img
					className="Card_Image"
					src={
						article && imgUrl
							? imgUrl
							: 'https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Deer&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Pale'
					}
				/>
				<div className="Card_Description">
					<p className="Card_Description_Country">
						{article ? article.country : 'France'}
					</p>
					<p className="Card_Description_Title">
						{article ? article.title : 'France'}
					</p>
				</div>
			</div>
		);
	}
}
export default withRouter(ArticleCard);
