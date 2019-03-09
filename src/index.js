import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import { UseProvider } from './contexts/UseContext';
import App from './App';

ReactDOM.render(
	<UseProvider>
		<App />
	</UseProvider>,
	document.getElementById('app')
);
