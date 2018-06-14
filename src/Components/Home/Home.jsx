import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<Link to='/about'>
					<Button variant="raised" color="primary">
						About
					</Button>
				</Link>
			</div>
		)
	}
}
