import React from 'react';
import Articles from './Articles';
import { UseConsumer } from '../../contexts/UseContext';

export default props => (
	<UseConsumer>
		{({ isAuth, verifyCurrentUser, currentUser }) => (
			<Articles
				{...props}
				isAuth={isAuth}
				currentUser={currentUser}
				verifyCurrentUser={verifyCurrentUser}
			/>
		)}
	</UseConsumer>
);