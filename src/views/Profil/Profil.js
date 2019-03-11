import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { globalPlug } from '../../contexts/UseContext';
import Button from '../../components/Button/Button';

require('./Profil.scss');

Modal.setAppElement('#app');

class Profil extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			user: null,
			login: '',
			username: '',
			password: '',
			showModal: false,
			articlesByUser: []
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	handleOpenModal = () => {
		this.setState({ showModal: true });
	};

	handleCloseModal = () => {
		this.setState({ showModal: false });
	};

	getProfil = async () => {
		await axios
			.get(`/users/${this.props.currentUser.id}`)
			.then(res => {
				return res.data;
			})
			.then(user => this.setState({ user }))
			.catch(error => error);
	};

	editProfil = () => {
		const user_id = this.props.currentUser && this.props.currentUser.id;
		const editUser = {
			login: this.state.login ? this.state.login : this.state.user.login,
			username: this.state.username
				? this.state.usernameField
				: this.state.user.username,
			password: this.state.password
				? this.state.passwordField
				: this.state.user.password
		};

		axios
			.post(`/users/edit/${user_id}`, {
				user: editUser,
				user_id
			})
			.then(res => {
				return res.data;
			})
			.then(res => {
				this.props.verifyCurrentUser();
				this.setState({
					user: res.data,
					showModal: false
				});
				toast.success('Informations modifées');
			})
			.catch(error => {
				console.error(error);
				toast.error('Erreur lors des modifications');
			});
	};

	componentDidMount = async () => {
		await this.props.verifyCurrentUser();
		await this.props.getAllArticlesByUserId();
		console.log('articles', this.props.getAllArticlesByUserId);
		this.setState({ user: this.props.currentUser });
		console.log('lala', this.props.currentUser);
		this.getProfil();
	};

	render() {
		const { user } = this.state;
		return (
			<div className="Profil">
				<h2 className="Profil__Title">Mon Profil</h2>
				<div className="Profil__Container">
					<div className="Profil__Container__Image">
						<img
							src="https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Deer&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Pale"
							alt=""
						/>
					</div>
					<div className="Profil__Container__Infos">
						<p className="Profil__Container__Infos__Name">
							{user ? user.username : ''}
						</p>
						<p className="Profil__Container__Infos__Email">
							{user ? user.login : ''}
						</p>
						<Button
							className="Profil__Container__Infos__Button"
							label="Editer"
							onClick={this.handleOpenModal}
						/>
					</div>
					<div className="Profil__Container__Articles">
						<p>Mes articles</p>
						<div>liste articles d'un user avec bouton supprimer et edit</div>
						<Link to="/article">
							<Button
								className="Profil__Container__Articles__Button"
								label="Ecrire un article"
							/>
						</Link>
					</div>

					<div className="Profil__Container__Settings">
						<Modal
							isOpen={this.state.showModal}
							onHide={this.handleCloseModal}
							contentLabel="Modifier son profil"
						>
							<h2>Informations</h2>
							<form className="Login__Form" onSubmit={this.handleSubmit}>
								<input
									defaultValue={user ? user.username : ''}
									type="text"
									name="username"
									onChange={this.handleChange}
								/>
								<input
									defaultValue={user ? user.login : ''}
									type="email"
									name="email"
									onChange={this.handleChange}
								/>
								<input
									defaultValue={user ? user.password : ''}
									type="password"
									name="password"
									onChange={this.handleChange}
								/>
							</form>
							<div className="Profil__Modal__BtnContainer">
								<Button
									className="Profil__Modal__BtnContainer__Button"
									label="Modifier"
									onClick={this.editProfil}
								/>
								<Button
									className="Profil__Modal__BtnContainer__Button"
									label="Fermer"
									onClick={this.handleCloseModal}
								/>
							</div>
						</Modal>
					</div>
				</div>
			</div>
		);
	}
}

export default globalPlug(Profil);
