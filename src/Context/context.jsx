import React, { Component } from 'react'

export const globalContext = React.createContext();

export class Provider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : 'Charle'
        };
    }
  
    updateName(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <globalContext.Provider value={{
                context: this.state,
                updateName: (e) => {this.updateName(e)}
            }}>
                {this.props.children}
            </globalContext.Provider>
        )
  }
}

