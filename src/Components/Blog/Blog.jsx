import React, { Component, Fragment } from 'react'
import TopPage from '../TopPage/TopPage.jsx';
import { Grid } from '@material-ui/core';
import Grey from '@material-ui/core/colors/grey';
import Yellow from '@material-ui/core/colors/yellow';
import BlogCard from '../BlogCard/BlogCard.jsx';
import { globalContext } from '../../Context/context.jsx';



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
                    <globalContext.Consumer>
                        {
                            data => Object.keys(data.blogs).map((elem) => <BlogCard key={elem} 
                                data={data.blogs[elem]}
                                btnColor={Yellow['500']}
                            />)
                        }
                    </globalContext.Consumer>
                </Grid>
            </Grid>
        </div>
      </Fragment>
    )
  }
}
//TODO Need to generate list of blogCard
export default Blog;
