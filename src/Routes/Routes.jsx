import React, { Component } from 'react'
import { Route } from 'react-router';

import Home from '../Components/Home/Home';
import About from '../Components/About/About';

export default class componentName extends Component {
	render() {
		return (
			<div>
				<Route exact path ='/' component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
			</div>
		)
	}
}
