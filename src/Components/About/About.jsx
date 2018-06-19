import React, { Component, Fragment } from 'react'
import { globalContext } from '../../Context/context.jsx';

export default class About extends Component {
	render() {
		return (
			<Fragment>
				<h1>Hello, 
					<globalContext.Consumer>{
						(data) => <Fragment>{data.context.name}</Fragment>
						}
						</globalContext.Consumer>
				</h1>
			</Fragment>
		)
	}
}
