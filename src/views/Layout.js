import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';

export default function DefaultLayout({ component: MatchedPage, ...rest }) {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<React.Fragment>
					<Header />
					<Nav />
					<MatchedPage {...matchProps} />
					<Footer />
					<ToastContainer
						transition={Flip}
						position="top-center"
						autoClose={5000}
						hideProgressBar
					/>
				</React.Fragment>
			)}
		/>
	);
}
