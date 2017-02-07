import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Components 
import { Main } from './components/main.jsx';

// Styles
import './scss/main.scss';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}></Route>
    </Router>
    , document.getElementById('app-container')
);