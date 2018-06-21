import React, { Component } from 'react';
import { StaticRouter, Router } from "react-router";
import Routes from './Routes/Routes.jsx';
import { Provider } from './Context/context';


export default class Main extends Component {
	render() {
		return (
			<html lang="en">
			<head>
				<meta charSet="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
				<link rel="stylesheet" href="bundle.css" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<title>Document</title>
			</head>
			<body style={{margin: '0px', overflowX: 'hidden'}}>
				<div id="root">
					<Provider>				
						<StaticRouter location={this.props.url} context={{}}>
							<Routes />
						</StaticRouter>
					</Provider>
				</div>
				<script src='bundle.js'></script>
			</body>
			</html>
		)
	}
}
