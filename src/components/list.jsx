import React from 'react';
import { ListItem } from './list-item.jsx';

export class List extends React.Component {
    render() {
        let listItems = this.props.ingredients.map(item => {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
};