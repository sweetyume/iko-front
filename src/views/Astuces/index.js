import React from 'react';
import Astuces from './Astuces';
import { UseConsumer } from '../../contexts/UseConsumer';

export default () => (
	<UseConsumer>{({ isAuth }) => <Astuces isAuth={isAuth} />}</UseConsumer>
);
