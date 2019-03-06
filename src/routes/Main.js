import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Contact from '../views/Contact';
import Profiles from '../views/Profiles';
import Articles from '../views/Articles';
import Destinations from '../views/Destinations';
import Register from '../components/Form/Register';
import Login from '../components/Form/Login';
import Api from '../views/Api';

// const style = {
//   height: "75vh"
// };
const Main = () => {
	return (
		<main className="main">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/profiles" component={Api} />
				{/* <Route path="/profiles" component={Profiles} /> */}
				<Route path="/Articles" component={Articles} />
				<Route path="/contact" component={Contact} />
				<Route path="/destinations" component={Destinations} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</Switch>
		</main>
	);
};
export default Main;
