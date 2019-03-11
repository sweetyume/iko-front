import React from 'react';
import axios from 'axios';

import { globalPlug } from '../../contexts/UseContext';

import Section from '../Section/Section';

require('./FullArticle.scss');

class FullArticle extends React.Component {
	constructor() {
		super();
		this.state = {
			loadedArticle: '',
			imgUrl: ''
		};
	}
	componentDidMount() {
		console.log(this.props);
		this.loadData();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.articleId !== this.props.articleId) {
			this.loadData();
		}
	}

	loadData() {
		if (this.props.match.params.id) {
			if (
				!this.state.loadedArticle ||
				(this.state.loadedArticle &&
					this.state.loadedArticle.id !== +this.props.match.params.id)
			) {
				axios
					.get('/articles/' + this.props.match.params.id)
					.then(response => {
						return response.data;
					})
					.then(loadedArticle => {
						//transform buffer to 8bits unsign
						const arrayBufferView = new Uint8Array(loadedArticle.file.data);
						const imgBlob = new Blob([arrayBufferView], { type: 'image/jpeg' });
						const imgUrl = URL.createObjectURL(imgBlob);
						this.setState({ loadedArticle: loadedArticle.data, imgUrl });
					})
					.catch(error => error);
			}
		}
	}
	// loadData() {
	// 	if (this.props.match.params.id) {
	// 		if (
	// 			!this.state.loadedArticle ||
	// 			(this.state.loadedArticle &&
	// 				this.state.loadedArticle.id !== +this.props.match.params.id)
	// 		) {
	// 			axios.get('/articles/' + this.props.match.params.id)
	// 			.then(response => {return response.data})
	// 			.then(response => {
	// 				// console.log(response);
	// 				this.setState({ loadedArticle: response.data });
	// 			});
	// 		}
	// 	}
	// }

	render() {
		const { loadedArticle } = this.state;
		return (
			<Section title={loadedArticle ? loadedArticle.title : ''}>
				<div className="DisplayArticle">
					<div className="DisplayArticle__Header">
						<h3 className="DisplayArticle__Header__Country">
							{loadedArticle ? loadedArticle.country : ''}
						</h3>
					</div>

					<div className="DisplayArticle__Content">
						<img
							className="DisplayArticle__Content__Image"
							src={loadedArticle ? loadedArticle.imgUrl : ''}
						/>
						<div className="DisplayArticle__Content__Description">
							{loadedArticle
								? loadedArticle.description
								: loadedArticle.description}
						</div>
					</div>
				</div>
			</Section>
		);
	}
}
export default globalPlug(FullArticle);

// const DisplayArticle = ({ title, country, imgUrl, description }) => {
// 	return (
// 		<div className="DisplayArticle">
// 			<div className="DisplayArticle__Header">
// 				<h2 className="DisplayArticle__Header__Title">{title}</h2>
// 				<h3 className="DisplayArticle__Header__Country">{country}</h3>
// 			</div>

// 			<div className="DisplayArticle__Content">
// 				<img className="DisplayArticle__Content__Image" src={imgUrl} />
// 				<div className="DisplayArticle__Content__Description">
// 					{description}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
