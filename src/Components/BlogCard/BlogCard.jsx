import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Paper, Button, Typography, Divider } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default class HomeCard extends Component {
	constructor(props) {
		super(props);
		let root = {
			bg: {
				backgroundImage: 'url(' + this.props.data.img + ')',
			},
			btn: {
				backgroundColor: this.props.btnColor,
			}
		};
		this.state = {
			root: root,
		};
	}

	render() {
		const data = this.props.data;
		return (
			<Fragment>
				<Paper style={this.state.root.backBg} className='homecard-bg-back' elevation={10}>
					<Grid container alignItems='center' spacing={24}>
						<Grid item xs={7}>
							<Paper style={this.state.root.bg} className='blogcard-bg' elevation={12} >

							</Paper>
						</Grid>
						<Grid item xs={5}>
							<Grid container>
								<Grid item xs={11}>
									<Typography variant="title" gutterBottom align='left'>
										{data.title}
									</Typography>
									<Typography gutterBottom className='text-margin' align='justify'>
										{data.shortContent}
									</Typography>
									<Divider />
									<Typography variant="caption" gutterBottom align='right'>
										{'Par ' + data.author + ', le ' + new Date(data.date).toDateString()}
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link to={'/blog/' + this.props.data.title}>
									<Button className='homecard-btn' variant='contained' size='large' style={this.state.root.btn} disabled={this.props.disabled}>
										{this.props.data.title}
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</Fragment>
		);
	}
}
