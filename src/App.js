import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './views/Layout';
import Destinations from './views/Destinations/Destinations';
import Astuces from './views/Astuces/Astuces';
import Articles from './views/Articles/Articles';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Api from './views/Api';
import Home from './views/Home';

require('./sass/app.scss');

export default () => (
	<BrowserRouter>
		<Switch>
			<Layout exact path="/" component={Destinations} />
			<Layout exact path="/register" component={Register} />
			<Layout path="/login" component={Login} />
			<Layout exact path="/destinations" component={Destinations} />
			<Layout exact path="/astuces" component={Astuces} />
			<Layout exact path="/programmes" component={Articles} />
			<Layout exact path="/articles" component={Articles} />
			<ToastContainer
				transition={Flip}
				position="top-center"
				autoClose={5000}
				hideProgressBar
			/>
		</Switch>
	</BrowserRouter>
);
