import React from 'react';
import Astuces from './Astuces';
import { UseConsumer } from '../../contexts/UseContext';

export default () => (
	<UseConsumer>
		{value => {
			const { isAuth } = value;
			return <Astuces isAuth={isAuth} />;
		}}
	</UseConsumer>
);

// import React from 'react';
// import Astuces from './Astuces';
// import { UseConsumer } from '../../contexts/UseConsumer';

// export default () => (
// 	<UseConsumer>{({ isAuth }) => <Astuces isAuth={isAuth} />}</UseConsumer>
// );
