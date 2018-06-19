import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { globalContext } from '../../Context/context.jsx';

export default class Home extends Component {
	render() {
		return (
			<Fragment>
				<h1>Home</h1>
				<globalContext.Consumer>
					{data => (<TextField value={data.context.name} onChange={(e)=>{data.updateName(e)}} />)}
				</globalContext.Consumer>
				<Link to='/about'>
					<Button variant="raised" color="primary">
						go to Aboute
					</Button>
				</Link>
			</Fragment>
		)
	}
}
