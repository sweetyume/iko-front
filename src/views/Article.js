import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/Button/Button';

require('./Article.scss');

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: '',
			title: '',
			image: null,
			description: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onChangeFile = this.onChangeFile.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	onChangeFile(event) {
		this.setState({
			image: event.target.files[0]
		});
	}
	onClick(e) {
		e.preventDefault();
		const formData = new FormData();

		formData.append('country', this.state.country),
			formData.append('title', this.state.title),
			formData.append('description', this.state.description),
			formData.append('image', this.state.image);
		axios
			.post('/articles', formData)
			.then(res => res.data)
			.catch(error => error);
	}

	render() {
		return (
			<form className="Article">
				<input
					type="text"
					name="country"
					placeholder="country"
					value={this.state.value}
					onChange={this.onChange}
				/>
				<input
					type="text"
					name="title"
					placeholder="title"
					value={this.state.value}
					onChange={this.onChange}
				/>
				<textarea
					placeholder="Description"
					id="description"
					name="description"
					value={this.state.value}
					onChange={this.onChange}
					rows="5"
					cols="33"
				/>
				<input type="file" name="image" onChange={this.onChangeFile} />

				<Button
					className="Article_Button"
					label="Ajouter"
					onClick={this.onClick}
				/>
			</form>
		);
	}
}

export default Article;
