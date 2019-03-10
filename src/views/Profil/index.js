import React from 'react';
import Profil from './Profil';
import { UseConsumer } from '../../contexts/UseContext';

export default () => (
	<UseConsumer>
		{({ currentUser, verifyCurrentUser }) => (
			<Profil currentUser={currentUser} verifyCurrentUser={verifyCurrentUser} />
		)}
	</UseConsumer>
);
