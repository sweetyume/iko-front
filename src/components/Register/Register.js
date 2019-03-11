import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import Button from '../Button/Button';
import Section from '../Section/Section';
import { globalPlug } from '../../contexts/UseContext';

require('./Register.scss');

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = event => {
		event.preventDefault();
		this.register();
	};

	register = () => {
		const user = {
			username: this.state.username,
			login: this.state.email,
			password: this.state.password
		};
		console.log({ user }, this.state);

		axios
			.post('/register', { user })
			.then(res => {
				console.log('useradd: ' + res);
				this.props.history.push('/');
				toast.success(`${user.username}, inscription réussie!`);
			})
			.catch(error => {
				console.error(error);
				toast.error(error.request.response.replace(/"/g, ''));
			});
	};
	render() {
		return (
			<Section className="Register" title="Inscrivez-vous">
				<form className="Register__Form" onSubmit={this.handleSubmit}>
					<label for="username">Nom</label>
					<input
						type="text"
						name="username"
						value={this.state.username}
						placeholder="nom"
						onChange={this.handleChange}
					/>
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						value={this.state.email}
						placeholder="Adresse e-mail"
						onChange={this.handleChange}
					/>
					<label for="password">Mot de passe</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						placeholder="Mot de passe"
						onChange={this.handleChange}
					/>
					<Button label="Je m'inscris" type="submit" />
					<p className="Register__Form__Message">
						Déjà membre? <Link to="/login">Connectez-vous</Link>
					</p>
				</form>
			</Section>
		);
	}
}
export default globalPlug(Register);
