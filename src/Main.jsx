import React, { Component } from 'react';
import { StaticRouter, Router } from "react-router";
import Routes from './Routes/Routes';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			context : {}
		}
	}
	
	getRouter() {
		if (this.props.sender === 'server') {
			return <StaticRouter location={this.props.url} context={{}}>
				<Routes />
			</StaticRouter>
		}
		else {
			return <Router>
				<Routes />
			</Router>
		}
	}

	render() {
		return (
			<html lang="en">
			<head>
				<meta charSet="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<title>Document</title>
			</head>
			<body>
				<div id="root">
					{this.getRouter()}
				</div>
			</body>
			</html>
		)
	}
}
