import React, { Component } from 'react'
import ReactDom from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes/Routes.jsx';
import { Provider } from './Context/context.jsx';


export default class Client extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<Routes />
				</Router>
			</Provider>
		)
	}
}

if (module.hot) {
	module.hot.accept(() => {
		console.log('Page reloaded.');
		ReactDom.render(<Client />, document.getElementById('root'));
		document.getElementById('root').innerHTML = "";	
	});
}

ReactDom.render(<Client />, document.getElementById('root'));
