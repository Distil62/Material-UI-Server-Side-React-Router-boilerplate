import React, { Component, Fragment } from 'react'
import TopPage from '../TopPage/TopPage.jsx';
import HomeCard from '../HomeCard/HomeCard.jsx';
import { Grid } from '@material-ui/core';
import Grey from '@material-ui/core/colors/grey';
import Red from '@material-ui/core/colors/red';

export default class Home extends Component {
	constructor(props) {
		super(props);
		const root = {
			paddingTop : '128px',
			paddingBottom: '96px',
			backgroundColor: Grey["50"]
		};
		this.state = {
			root
		};
	}
	
	render() {
		return (
			<Fragment>
				<TopPage 
					img="https://cdn.discordapp.com/attachments/266953688801738752/460181273634406400/fabian-grohs-616504-unsplash.jpg"
					title="Welcome"/>
				<div style={this.state.root}>
					<Grid spacing={40} container justify='center'>
						<Grid item xs={12} md={10}>
							<Grid container justify='center'>
								<Grid item xs={10} md={5}>
									<HomeCard img="https://cdn.discordapp.com/attachments/266953688801738752/460181690380451840/pawel-nolbert-291146-unsplash.jpg"
												btnColor={Grey['800']}
												btnContent='Projets'
												disabled={true}/>
								</Grid>
								<Grid item xs={false} md={2}>
								</Grid>
								<Grid item xs={10} md={5}>
									<HomeCard img="https://cdn.discordapp.com/attachments/266953688801738752/460182541144424459/daniel-cheung-129839-unsplash.jpg"
												btnColor={Grey['800']}
												btnContent='CV'
												disabled={true}/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={10}>
							<Grid container justify='center'>
								<Grid item xs={10} md={5}>
									<HomeCard 	img="https://cdn.discordapp.com/attachments/266953688801738752/459500282032685080/branden-harvey-362111-unsplash.jpg"
												btnColor={Red['500']}
												btnContent='Blog'
												to='/blog'/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Fragment>
		)
	}
}
