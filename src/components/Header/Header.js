import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '../Button/Button';
import { globalPlug } from '../../contexts/UseContext';

require('./Header.scss');
class Header extends React.Component {
	endSession = async () => {
		await this.props.logout();
		setTimeout(() => {
			this.props.history.push('/login');
		}, 1000);
	};

	render() {
		const { isAuth } = this.props;
		return (
			<nav className="Header">
				<Link className="Header__Logo" to="/">
					iko!
				</Link>
				{isAuth ? (
					<div className="Header__Right">
						<Link className="Header__Right__Button" to="/profil">
							<Button label="Profil" />
						</Link>
						<Link className="Header__Right__Button" to="/">
							<Button label="Logout" onClick={this.endSession} />
						</Link>
					</div>
				) : (
					<div className="Header__Right">
						<Link className="Header__Right__Button" to="/register">
							<Button label="s'inscrire" />
						</Link>
						<Link className="Header__Right__Button" to="/login">
							<Button label="se connecter" />
						</Link>
					</div>
				)}
			</nav>
		);
	}
}

export default globalPlug(withRouter(Header));
