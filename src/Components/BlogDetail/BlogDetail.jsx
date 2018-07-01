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

	componentWillMount() {
		document.title = document.title + ' - ' + this.props.match.params.title;
	}

    componentDidMount() {
		document.querySelectorAll('code').forEach(elem => {
			highlightBlock(elem);
		});
    }

	render() {
		const url = this.props.match.params.title;
		return (
			<div>
				<globalContext.Consumer>
					{
						data => <div> 
						<TopPage img={data.blogs[url].img}
								title={data.blogs[url].title} />
							<Grid style={this.state.root} container justify='center'>
								<Grid item xs={11} md={10}>
									<Paper elevation={24}>
										<Grid container justify='center'>
											<Grid item xs={10}>
												<div className='md'>
													{data.blogs[url].content.contents}
												</div>
												<Divider />
												<Typography variant="caption" gutterBottom align='right'>
													{'Par ' + data.blogs[url].author + ', le ' + new Date(data.blogs[url].date).toDateString()}
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
