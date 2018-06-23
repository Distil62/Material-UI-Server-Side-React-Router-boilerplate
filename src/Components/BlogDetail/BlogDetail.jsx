import React, { Component, Fragement } from 'react'
import TopPage from '../TopPage/TopPage.jsx'
import { Paper, Divider, Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { globalContext } from '../../Context/context.jsx';
import Grey from '@material-ui/core/colors/grey';
import { highlightBlock } from 'highlight.js';

export class BlogDetail extends Component {
	
	constructor(props) {
		super(props);
		const root = {
			paddingTop : '96px',
			paddingBottom: '48px',
			backgroundColor: Grey["50"]
		};
		this.state = {
			root
		};
	}

    componentDidMount() {
		document.querySelectorAll('code').forEach(elem => {
			highlightBlock(elem);
		})

		document.querySelectorAll('img').forEach(elem => {
			elem
		})
    }

	render() {
		const title = this.props.match.params.title;
		return (
			<div>
				<globalContext.Consumer>
					{
						data => <div> 
						<TopPage img={data.blogs[title].img}
								title={title} />
							<Grid style={this.state.root} container justify='center'>
								<Grid item xs={11} md={10}>
									<Paper elevation={24}>
										<Grid container justify='center'>
											<Grid item xs={10}>
												<div className='md'>
													{data.blogs[title].content.contents}
												</div>
												<Divider />
												<Typography variant="caption" gutterBottom align='right'>
													{'Par ' + data.blogs[title].author + ', le ' + new Date(data.blogs[title].date).toDateString()}
												</Typography>
											</Grid>
										</Grid>
									</Paper>
								</Grid>
							</Grid>
					</div>
					}
				</globalContext.Consumer>
			</div>
		)
	}
}

export default BlogDetail;
