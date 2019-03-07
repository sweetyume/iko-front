import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Main from './routes/Main';

require('./sass/app.scss');

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header className="Header" />
				<Nav className="Nav" />
				<Main className="Main" />
				<Footer className="Footer" />
			</div>
		);
	}
}
export default App;
