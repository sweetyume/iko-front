import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Section from '../Section/Section';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

require('./Register.scss');

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = event => {
		console.log(event.target);
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = async event => {
		event.preventDefault();
		let login = null;
		try {
			login = await axios.post('/login', {
				login: this.state.email,
				password: this.state.password
			});
			console.log('Login: ', login.data);
			this.props.history.push('/');
			toast.success(`${login.data}`);
		} catch (error) {
			console.error(error);
			toast.error(error.request.response.replace(/"/g, ''));
		}
	};
	render() {
		return (
			<Section className="Register" title="Connectez-vous">
				<form className="Register__Form" onSubmit={this.handleSubmit}>
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
					<p className="Register__Form__Message">
						Pas encore inscris? <Link to="/register">Inscrivez-vous</Link>
					</p>
				</form>
			</Section>
		);
	}
}
export default withRouter(Login);
