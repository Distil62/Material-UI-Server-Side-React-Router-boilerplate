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
					img="https://cdna.artstation.com/p/assets/images/images/010/557/912/large/soufiane-idrassi-cyberpunk-valkyries-copy.jpg?1525074029"
					title="Welcome"/>
				<div style={this.state.root}>
					<Grid spacing={40} container justify='center'>
						<Grid item xs={12} md={10}>
							<Grid container justify='center'>
								<Grid item xs={10} md={4}>
									<HomeCard img="https://cdna.artstation.com/p/assets/images/images/011/407/980/large/alfonso-salazar-alfonso-salazar-surfer.jpg?1529431365"
												btnColor={Grey['800']}
												btnContent='Projets'
												disabled={true}/>
								</Grid>
								<Grid item xs={false} md={4}>
								</Grid>
								<Grid item xs={10} md={4}>
									<HomeCard img="https://cdnb.artstation.com/p/assets/images/images/010/834/965/large/sylvain-sarrailh-lostremains.jpg?1526477317"
												btnColor={Grey['800']}
												btnContent='CV'
												disabled={true}/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={10}>
							<Grid container justify='center'>
								<Grid item xs={10} md={4}>
									<HomeCard 	img="https://cdna.artstation.com/p/assets/images/images/011/386/330/large/rutger-van-de-steeg-eclipse-3.jpg?1529338625"
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
