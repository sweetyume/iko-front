import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../views/Home';
import Astuces from '../views/Astuces';
import Profiles from '../views/Profiles';
import Articles from '../views/Articles';
import Destinations from '../views/Destinations';
import Register from '../components/Form/Register';
import Login from '../components/Form/Login';
import Api from '../views/Api';
import DisplayArticle from '../components/DisplayArticle/DisplayArticle';
import ArticleCard from '../components/Article/ArticleCard';
import Card from '../components/Card/Card';

// const style = {
//   height: "75vh"
// };
const Main = () => {
	return (
		<main className="main">
			<Switch>
				<Route exact path="/" component={Destinations} />
				{/* <Route exact path="/" component={Home} /> */}
				<Route path="/programmes" component={Api} />
				{/* <Route path="/profiles" component={Profiles} /> */}
				<Route path="/articles" component={Articles} />
				<Route path="/articles/:id" component={ArticleCard} />
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
