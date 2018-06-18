import React from 'react'

const context = {
    name : "Charle",
    changeName : (e) => {
        context.name = e.target.value;
        console.log(context.name);
    }
}

//TODO ADD EVENT HANDLER

export default React.createContext(context);