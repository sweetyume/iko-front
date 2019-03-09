import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Section from '../Section/Section';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { globalPlug } from '../../contexts/UseContext';

require('./Login.scss');

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.login();
	};

	login = async () => {
		let login = null;
		try {
			login = await axios.post('/login', {
				login: this.state.email,
				password: this.state.password
			});
			console.log('Login: ', login.data);
			await this.props.verifyCurrentUser();
			this.props.history.push('/');
			toast.success(`${login.data}`);
		} catch (error) {
			console.error(error);
			toast.error(error.request.response.replace(/"/g, ''));
		}
	};
	render() {
		return (
			<Section className="Login" title="Connectez-vous">
				<form className="Login__Form" onSubmit={this.handleSubmit}>
					<input
						type="email"
						name="email"
						value={this.state.email}
						placeholder="Adresse e-mail"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						name="password"
						value={this.state.password}
						placeholder="Mot de passe"
						onChange={this.handleChange}
					/>
					<Button label="Se connecter" type="submit" />
					<p className="Login__Form__Message">
						Pas encore inscrit? <Link to="/register">Inscrivez-vous</Link>
					</p>
				</form>
			</Section>
		);
	}
}
export default globalPlug(Login);
