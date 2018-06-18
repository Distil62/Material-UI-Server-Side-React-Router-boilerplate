import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server'

import Main from './src/Main';
const app = express();

const PORT = 8777;

app.use(express.static('dist'));

app.get('*', (req, res) => {
    let html = ReactDomServer.renderToString(
            React.createElement(
                    Main, {
                        url : req.url,
                        sender : 'server'
                    }));
    res.send(html);
});

app.listen(PORT, console.log('The server is listen on port ' + PORT));