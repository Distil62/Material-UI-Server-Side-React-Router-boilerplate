import React, { Component, Fragment } from 'react'
import TopPage from '../TopPage/TopPage.jsx';
import { Grid } from '@material-ui/core';
import Grey from '@material-ui/core/colors/grey';
import Yellow from '@material-ui/core/colors/yellow';
import HomeCard from '../HomeCard/HomeCard.jsx';


export class Blog extends Component {
    constructor(props) {
        super(props);
        const root = {
            backgroundColor: Grey["100"]
        }
        this.state = {
            root
        }
    }
  
    render() {
    return (
      <Fragment>
        <TopPage 
            img='https://cdn.discordapp.com/attachments/266953688801738752/459500282032685080/branden-harvey-362111-unsplash.jpg'
            title='Blog'/>
        <div className='blog-content' style={this.state.root}>
            <Grid container justify='center'>
                <Grid item xs={11}>
                    <HomeCard   img='https://cdna.artstation.com/p/assets/images/images/010/307/676/large/louis-charavner-flatspace.jpg?1523730134'
                                btnColor={Yellow['500']}
                                btnContent='Ticket1' />
                </Grid>
            </Grid>
        </div>
      </Fragment>
    )
  }
}

export default Blog;
