import React, { Component, Fragment } from 'react'
import { Route } from 'react-router';

import Home from '../Components/Home/Home.jsx';
import About from '../Components/About/About.jsx';
import Blog from '../Components/Blog/Blog.jsx';
import BlogDetail from '../Components/BlogDetail/BlogDetail.jsx';

import { globalContext } from '../Context/context.jsx';

export default class Routes extends Component {
	render() {
		return (
			<Fragment>
				<Route exact path ='/' component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
				<Route exact path='/blog' component={Blog} />
				<globalContext.Consumer>
					{
						data => Object.keys(data.blogs).map((elem) => <Route key={elem}
						path='/blog/:title' component={BlogDetail} />)
					}
				</globalContext.Consumer>
			</Fragment>
		)
	}
}
