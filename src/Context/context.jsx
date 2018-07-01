import React, { Component } from 'react'
import AllBlogs from './BlogProvider/allBlog.js';

export const globalContext = React.createContext();

export class Provider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: AllBlogs
        }
    }

    render() {
        this.state = Object.assign(this.state, {sender : this.props.sender});
        return (
            <globalContext.Provider value={this.state}>
                {this.props.children}
            </globalContext.Provider>
        )
    }
}

