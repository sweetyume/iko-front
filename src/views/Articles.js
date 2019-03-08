import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Section from '../components/Section/Section';
import ArticleCard from '../components/Article/ArticleCard';
import Card from '../components/Card/Card';
import Article from './Article';
require('./Articles.scss');

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			imgUrl: '',
			selectedArticleId: null
		};
	}
	// async componentDidMount() {
	// 	await axios
	// 		.get('/articles')
	// 		.then(res => res.data)
	// 		.then(articles => this.setState({ articles }))
	// 		.catch(error => error);
	// }

	async componentDidMount() {
		await axios
			.get('/articles')
			.then(response => {
				const articles = response.data;
				const updatedArticles = articles.map(article => {
					return {
						...article
					};
				});
				this.setState({ articles: updatedArticles });
				// console.log( response );
			})
			.catch(error => {
				// console.log(error);
				this.setState({ error: true });
			});
	}

	articleSelectedHandler = id => {
		this.setState({ selectedArticleId: id });
	};

	render() {
		const { articles } = this.state;
		return (
			<Section className="Articles" title="Articles">
				<Article />
				<div className="Articles_Container">
					{this.state &&
						articles &&
						articles.map((article, index) => (
							<ArticleCard
								className-="Articles_Container_Card"
								articleId={article.id}
								key={index}
								title={article.title}
								country={article.country}
								imgUrl={article.imgUrl}
								clicked={() => this.articleSelected(article.id)}
							/>
						))}
				</div>
			</Section>
		);
	}
}

export default withRouter(Articles);
