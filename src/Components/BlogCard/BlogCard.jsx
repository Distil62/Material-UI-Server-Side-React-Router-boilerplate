import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default class HomeCard extends Component {
	constructor(props) {
		super(props);
		let root = {
			bg : {
				backgroundImage : 'url('+this.props.img+')',
			},
			btn : {
				backgroundColor: this.props.btnColor,
			}
		};
		this.state = {
			root: root,
		};
	}

	render() {
		return (
			<Fragment>
				<Paper style={this.state.root.backBg} className='homecard-bg-back' elevation={10}>
					<Grid container>
						<Grid item xs={6}>
							<Paper style={this.state.root.bg} className='homecard-bg' elevation={12} >

							</Paper>
						</Grid>
						<Grid item xs={6}>
							
						</Grid>
					</Grid>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link to={this.props.to ? this.props.to : '/'}>
								<Button className='homecard-btn' variant='contained' size='large' style={this.state.root.btn} disabled={this.props.disabled}>
									{this.props.btnContent}
								</Button>
							</Link>
						</Grid>
					</Grid>
				</Paper>
			</Fragment>
		);
	}
}
