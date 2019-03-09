import React from 'react';
import Register from './Register';
import { UseConsumer } from '../../contexts/UseContext';

export default props => (
	<UseConsumer>
		{({ isAuth, currentUser, verifyCurrentUser }) => (
			<Register
				{...props}
				isAuth={isAuth}
				currentUser={currentUser}
				verifyCurrentUser={verifyCurrentUser}
			/>
		)}
	</UseConsumer>
);
