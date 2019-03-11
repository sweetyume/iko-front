import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/fr';

import { globalPlug } from '../../contexts/UseContext';

require('./FullArticle.scss');

const poster = require('../../assets/images/places-background.jpeg');
class FullArticle extends React.Component {
	constructor() {
		super();
		this.state = {
			loadedArticle: '',
			imgUrl: ''
		};
	}
	componentDidMount = async () => {
		console.log(this.props);
		await this.props.verifyCurrentUser();
		this.loadData();
	};

	componentDidUpdate(prevProps) {
		if (prevProps.articleId !== this.props.articleId) {
			this.loadData();
		}
	}
	// loadData() {
	// 	if (this.props.match.params.id) {
	// 		if (
	// 			!this.state.loadedArticle ||
	// 			(this.state.loadedArticle &&
	// 				this.state.loadedArticle.id !== +this.props.match.params.id)
	// 		) {
	// 			axios.get('/articles/' + this.props.match.params.id).then(response => {
	// 				// console.log(response);
	// 				this.setState({ loadedArticle: response.data });
	// 			});
	// 		}
	// 	}
	// }

	loadData() {
		if (this.props.match.params.id) {
			if (
				!this.state.loadedArticle ||
				(this.state.loadedArticle &&
					this.state.loadedArticle.id !== +this.props.match.params.id)
			) {
				axios
					.get('/articles/' + this.props.match.params.id)
					.then(loadedArticle => {
						const arrayBufferView = new Uint8Array(
							loadedArticle.data.file.data
						);
						const imgBlob = new Blob([arrayBufferView], {
							type: 'image/jpeg'
						});
						const imgUrl = URL.createObjectURL(imgBlob);
						this.setState({
							loadedArticle: loadedArticle.data,
							imgUrl: imgUrl
						});
					})
					.catch(error => error);
			}
		}
	}

	render() {
		const { loadedArticle, imgUrl } = this.state;
		const { currentUser } = this.props;
		console.log({ currentUser });
		const userId = currentUser && currentUser.username;
		console.log({ userId });
		let date = '';
		let heure = '';
		let image = '';
		let author = '';
		if (this.state.loadedArticle) {
			date = moment.utc(this.state.loadedArticle.created_at).format('ll');
			heure = moment
				.utc(this.state.loadedArticle.created_at)
				.utcOffset('+0200')
				.format('LT');

			image = this.state.imgUrl;
			author = userId;
			console.log('article', this.state.loadedArticle);
		}
		return (
			<div className="FullArticle">
				<h2>{loadedArticle ? loadedArticle.title : ''}</h2>
				<div className="FullArticle__Header">
					<h3 className="FullArticle__Header__Country">
						{loadedArticle ? loadedArticle.country : ''}
					</h3>
				</div>

				<div className="FullArticle__Content">
					<img
						className="FullArticle__Content__Image"
						src={imgUrl ? image : poster}
					/>
					<div className="FullArticle__Content__Infos">
						<p>
							le {date}, {heure}
						</p>
						<span>par {author}</span>
					</div>
					<div className="FullArticle__Content__Description">
						{loadedArticle
							? loadedArticle.description
							: loadedArticle.description}
					</div>
				</div>
			</div>
		);
	}
}
export default globalPlug(withRouter(FullArticle));
