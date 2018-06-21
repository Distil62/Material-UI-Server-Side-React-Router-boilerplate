import React, { Component, Fragment } from 'react'
import { Route } from 'react-router';

import Home from '../Components/Home/Home.jsx';
import About from '../Components/About/About.jsx';
import Blog from '../Components/Blog/Blog.jsx';

export default class Routes extends Component {
	render() {
		return (
			<Fragment>
				<Route exact path ='/' component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
				<Route path='/blog' component={Blog} />
			</Fragment>
		)
	}
}
