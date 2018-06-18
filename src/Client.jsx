import React, { Component } from 'react'
import ReactDom from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes/Routes.jsx';
import Context from './Context/context';


export default class Client extends Component {
	render() {
		return (
				<Router>
					<Routes />
				</Router>
		)
	}
}

ReactDom.render(<Client />, document.getElementById('root'));
