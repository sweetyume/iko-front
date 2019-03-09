import React from 'react';
import Header from './Header';
import { UseConsumer } from '../../contexts/UseContext';

export default () => (
	<UseConsumer>
		{({ verifyCurrentUser }) => (
			<Header verifyCurrentUser={verifyCurrentUser} />
		)}
	</UseConsumer>
);
