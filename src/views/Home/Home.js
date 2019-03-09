import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';

require('./Home.scss');

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { isAuth } = this.props;
		console.log(isAuth);
		return (
			<div className="Home">
				<Header className="Header" />
				<Nav className="Nav" />
				<Footer className="Footer" />
			</div>
		);
	}
}

export default Home;
//       * <Section className="Hello" title="Hello">
//   <p className="Hello__Content">
//     Cras facilisis urna ornare ex volutpat, et convallis erat elementum.
//     Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
//     rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
//     molestie. Cum sociis natoque penatibus et magnis dis parturient
//     montes, nascetur ridiculus mus.
//         </p>
// </Section>
