import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

import { List } from './components/list.jsx';

let ingredients = [
    {id: 1, text: 'ham'},
    {id: 2, text: 'cheese'},
    {id: 3, text: 'potatoes'}
];

ReactDOM.render(<List ingredients={ingredients} />, document.getElementById('react-container')
);