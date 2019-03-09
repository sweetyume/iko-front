import React from 'react';
import axios from 'axios';

/**
 * `createContext` contient 2 propriétés :
 * `Provider` et `Consumer`. Nous les rendons accessibles
 * via la constante `UserContext` et on initialise une
 * propriété par défaut "name" qui sera une chaîne vide.
 * On exporte ce contexte afin qu'il soit exploitable par
 * d'autres composants par la suite via le `Consumer`
 */
const UseContext = React.createContext();

/**
 * la classe UserProvider fera office de... Provider (!)
 * en englobant son enfant direct
 * dans le composant éponyme. De cette façon, ses values
 * seront accessibles de manière globale via le `Consumer`
 */

export class UseProvider extends React.Component {
	state = {
		isAuth: false,
		currentUser: null,
		articles: []
	};

	componentDidMount = async () => {
		try {
			await this.verifyCurrentUser();
			this.getAllArticles();
		} catch (error) {
			console.log(error);
		}
	};

	verifyCurrentUser = async () => {
		let authentication = null;

		try {
			authentication = await axios.get('/auth');
			this.setState({
				isAuth: true,
				currentUser: authentication.data.user
			});
		} catch (error) {
			this.setState({ currentUser: error.response.data.user });
			throw new Error(`Utilisateur non authentifié`);
		}
	};

	logout = async () => {
		try {
			await axios.get('/logout');
			toast.info(`A bientôt ${this.state.currentUser.username} !`);
			this.setState({ isAuth: false, currentUser: null });
		} catch (error) {
			console.error(error);
			toast.error('Error logout !');
		}
	};

	getAllArticles = async () => {
		let allArticles = null;
		try {
			allArticles = await axios.get('/articles');
			this.setState({ articles: allArticles.data });
		} catch (error) {
			console.error(error);
		}
	};

	action = {
		verifyCurrentUser: this.verifyCurrentUser,
		logout: this.logout,
		getAllArticles: this.allArticles
	};

	render() {
		return (
			<UseContext.Provider value={{ ...this.state, ...this.action }}>
				{this.props.children}
			</UseContext.Provider>
		);
	}
}

// HOC pour passer les props globaux, props définis dans this.action et thisstate au dessus
export const globalPlug = Component => props => {
	return (
		<UseContext.Consumer>
			{context => <Component {...context} {...props} />}
		</UseContext.Consumer>
	);
};

export default UseProvider;
