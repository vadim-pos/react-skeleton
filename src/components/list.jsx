// let React = require('react'),
    // ListItem = require('./list-item.jsx');

import React from 'react';
import { ListItem } from './list-item.jsx';

let ingredients = [
    {id: 1, text: 'ham'},
    {id: 2, text: 'cheese'},
    {id: 3, text: 'potatoes'}
];

export const List = React.createClass({
    render() {
        let listItems = ingredients.map(item => {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

// module.exports = List;