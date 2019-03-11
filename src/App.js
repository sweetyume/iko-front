import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './views/Layout';
import Destinations from './views/Destinations/Destinations';
import Astuces from './views/Astuces/Astuces';
import AddArticle from './views/AddArticle/AddArticle';
import ArticlesList from './views/ArticlesList/ArticlesList';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profil from './views/Profil/Profil';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import FullArticle from './components/FullArticle/FullArticle';

require('./sass/app.scss');

export default () => (
	<BrowserRouter>
		<Switch>
			<Layout exact path="/" component={Destinations} />
			<Layout exact path="/register" component={Register} />
			<Layout path="/login" component={Login} />
			<Layout path="/about" component={About} />
			<Layout path="/contact" component={Contact} />
			<Layout exact path="/destinations" component={Destinations} />
			<Layout exact path="/astuces" component={Astuces} />
			<Layout exact path="/programmes" component={ArticlesList} />
			<Layout exact path="/profil" component={Profil} />
			<Layout exact path="/articles" component={ArticlesList} />
			<Layout exact path="/article" component={AddArticle} />
			<Layout exact path="/articles/:id" component={FullArticle} />
			<ToastContainer
				transition={Flip}
				position="top-center"
				autoClose={5000}
				hideProgressBar
			/>
		</Switch>
	</BrowserRouter>
);
