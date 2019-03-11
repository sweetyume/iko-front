import React, { Component } from 'react';
import { globalPlug } from '../../contexts/UseContext';

import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Card from '../../components/Card/Card';

require('./Articles.scss');

class ArticlesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			selectedArticleId: null
		};
	}

	componentDidMount = async () => {
		await this.props.getAllArticles();
	};

	articleSelectedHandler = id => {
		this.setState({ selectedArticleId: id });
	};

	displayFullArticle = id => {
		this.props.history.push('/articles/' + id);
		console.log(this.props.articleId);
	};

	render() {
		const { articles } = this.props;
		const allArticles = articles.map((article, articleId) => {
			return (
				<ArticleCard
					className-="Articles__Container__Card"
					key={articleId}
					articleId={article.id}
					title={article.title}
					country={article.country}
					imgUrl={article.imgUrl}
					onClick={() => this.displayFullArticle(article.id)}
				/>
			);
		});
		return (
			<React.Fragment>
				<div className="Articles">
					<h2>Destinations</h2>
					<div className="Articles__Container">{allArticles}</div>
					{/* <Route
						path={this.props.match.url + '/:id'}
						exact
						component={FullArticle}
					/> */}
				</div>
			</React.Fragment>
		);
	}
}

export default globalPlug(ArticlesList);
