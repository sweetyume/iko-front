import React from 'react';
import Destinations from './Destinations';
import { UseConsumer } from '../../contexts/UseConsumer';

export default () => (
	<UseConsumer>{({ isAuth }) => <Destinations isAuth={isAuth} />}</UseConsumer>
);
