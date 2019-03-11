import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import { globalPlug } from '../../contexts/UseContext';

require('./AddArticle.scss');

class AddArticle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			country: '',
			title: '',
			image: null,
			description: ''
		};
	}
	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onChangeFile = event => {
		this.setState({
			image: event.target.files[0]
		});
	};

	addArticle = e => {
		e.preventDefault();
		const formData = new FormData();

		formData.append('country', this.state.country),
			formData.append('title', this.state.title),
			formData.append('description', this.state.description),
			formData.append('image', this.state.image);
		axios
			.post('/articles', formData)
			.then(res => {
				res.data;
				this.props.history.push('/articles');
				toast.success('Article bien ajouté');
			})
			.catch(error => {
				error;
				toast.error(error.request.response.replace(/"/g, ''));
			});
	};

	render() {
		return (
			<Section className="Article" title="Ecrire un article">
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
						onClick={this.addArticle}
					/>
				</form>
			</Section>
		);
	}
}

export default globalPlug(AddArticle);
