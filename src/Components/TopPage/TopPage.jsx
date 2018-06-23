import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

/**
 * 
 * @param img Url of img
 * @param color Color #0000
 * @param title Title of page
 */
export default class TopPage extends Component {
	constructor(props) {
		super(props);
		let root;
		if (this.props.img) {
			root = {
				backgroundImage : "url("+this.props.img+")",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundAttachment: 'scroll',
				backgroundPosition: 'center'
			}
		}
		else {
			root = {
				backgroundColor : this.props.color
			}
		}
		this.state = {
			root :{
				bg : Object.assign(root, {
					height : '256px'
				}),
				gridTitle : {
					position: 'relative',
					top: '220px'
				},
				titlePaper : {
					padding : "12px"
				}
			} 
		}

	}

	render() {
		return (
			<Fragment>
					<Paper elevation={24} square={false} style={this.state.root.bg}>
						<Grid container justify="center">
							<Grid style={this.state.root.gridTitle} item xs={10} md={8} lg={6}>
								<Paper elevation={18} style={this.state.root.titlePaper}>
									<Typography variant="display2">
										<Grid container justify="center">
											{this.props.title}
										</Grid>
      								</Typography>
								</Paper>
							</Grid>
						</Grid>
					</Paper>
			</Fragment>
		)
	}
}
