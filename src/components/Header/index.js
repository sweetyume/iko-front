import React from 'react';
import Header from './Header';
import { UseConsumer } from '../../contexts/UseContext';

export default () => (
	<UseConsumer>
		{value => {
			const { isAuth, logout } = value;
			return <Header isAuth={isAuth} logout={logout} />;
		}}
	</UseConsumer>
);
