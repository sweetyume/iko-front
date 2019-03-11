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
					<label for="country">Pays</label>
					<input
						type="text"
						name="country"
						placeholder="nom du pays ou de la région"
						value={this.state.value}
						onChange={this.onChange}
					/>
					<label for="title">Titre</label>
					<input
						type="text"
						name="title"
						placeholder="titre de l'article"
						value={this.state.value}
						onChange={this.onChange}
					/>
					<label for="description">Description</label>
					<textarea
						placeholder="Partagez votre expérience"
						id="description"
						name="description"
						value={this.state.value}
						onChange={this.onChange}
						rows="5"
						cols="33"
					/>
					<label for="image">Choisir une image</label>
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
