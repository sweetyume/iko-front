import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Astuces from '../views/Astuces';
import Articles from '../views/Articles';
import Destinations from '../views/Destinations/Destinations';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Api from '../views/Api';

const Main = () => {
	return (
		<main className="main">
			<Switch>
				<Route exact path="/" component={Destinations} />
				<Route path="/programmes" component={Api} />
				<Route path="/articles" component={Articles} />
				<Route path="/astuces" component={Astuces} />
				<Route path="/destinations" component={Destinations} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<ToastContainer
					transition={Flip}
					position="top-center"
					autoClose={5000}
					hideProgressBar
				/>
			</Switch>
		</main>
	);
};
export default Main;
