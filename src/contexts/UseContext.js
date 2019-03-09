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
		} catch (error) {
			console.log(error);
		}
	};

	verifyCurrentUser = async () => {
		let authentication = null;
		try {
			authentication = await axios.get('/auth');
			console.log('authentication', authentication);
			this.setState({
				isAuth: true,
				currentUser: authentication.data.user
			});
		} catch (error) {
			this.setState({ currentUser: error.response.data.user });
			throw new Error('Utilisateur non authentifié');
		}
	};

	action = {
		verifyCurrentUser: this.verifyCurrentUser
	};

	render() {
		return (
			/**
			 * la propriété value est très importante ici, elle rend
			 * le contenu du state disponible aux `Consumers` de l'application
			 */
			<UseContext.Provider value={{ ...this.state, ...this.action }}>
				{this.props.children}
			</UseContext.Provider>
		);
	}
}

export const UseConsumer = UseContext.Consumer;
export default UseProvider;
