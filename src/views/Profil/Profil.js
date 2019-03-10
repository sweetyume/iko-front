import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { globalPlug } from '../../contexts/UseContext';

import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';

require('./Profil.scss');

class Profil extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			user: null,
			user_emailField: '',
			user_usernameField: '',
			user_passwordField: ''
		};
	}
	getProfil = async () => {
		await axios
			.get(`/users/${this.props.userId}`)
			.then(res => {
				res.data, console.log(res.data);
			})
			.then(user => this.setState({ user }))
			.catch(error => error);
	};
	// editProfil >  show modal to edit  user settings
	editUserProfil = () => {
		const user_id = this.props.currentUser && this.props.currentUser.id;
		const editUser = {
			user_email: this.state.user_emailField
				? this.state.user_emailField
				: this.state.user.login,
			user_username: this.state.user_usernameField
				? this.state.user_usernameField
				: this.state.user.username,
			user_password: this.state.user_passwordField
				? this.state.user_passwordField
				: this.state.user.password
		};

		axios
			.post(`/users/edit/${this.props.userId}`, {
				user: editUser,
				user_id
			})
			.then(res => {
				this.props.verifyCurrentUser();
				this.setState({
					user: res.data
				});
				toast.success('Changement enregistré avec succès');
			})
			.catch(error => {
				console.error(error);
				toast.error('Erreur lors du changement');
			});
	};

	componentDidMount() {
		this.setState({ user: this.props.currentUser });
		this.getProfil();
	}
	render() {
		const { user } = this.state;
		return (
			<Section className="Profil" title="Mon Profil">
				<div className="Profil__Container">
					<div className="Profil__Image">
						<img
							src="https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&facialHairType=MoustacheFancy&facialHairColor=Auburn&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Deer&eyeType=Cry&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Pale"
							alt=""
						/>
					</div>

					<div className="Profil__Description">
						<p className="Profil__Description__Name">
							username: {user.username}
						</p>
						<p className="Profil__Description__Email">email: {user.login}</p>
						{/* <p className="Profil__Description__Password">
							password: {user && user.password}
						</p> */}
					</div>
					<Button label="Editer" />
				</div>
			</Section>
		);
	}
}

export default globalPlug(Profil);
