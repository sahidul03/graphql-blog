import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreatePost from './components/CreatePost';
import { BrowserRouter, Switch } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <App path="/" exact={true}/>        
        <CreatePost path="/create-post" exact={true}/>        
    </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
