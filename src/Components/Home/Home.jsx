import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import Context from '../../Context/context';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<Context.Consumer>
					{data => <TextField value={data.name} onChange={(e)=>{data.changeName(e)}} />}
				</Context.Consumer>
				<Link to='/about'>
					<Button variant="raised" color="primary">
						go to Aboute
					</Button>
				</Link>
			</div>
		)
	}
}
