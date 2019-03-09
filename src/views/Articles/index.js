import React from 'react';
import Articles from './Articles';
import { UseConsumer } from '../../contexts/UseContext';

export default props => (
	<UseConsumer>
		{({ getAllArticles }) => (
			<Articles {...props} getAllArticles={getAllArticles} />
		)}
	</UseConsumer>
);
