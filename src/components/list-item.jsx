import React from 'react';

export const ListItem = React.createClass({
    render() {
        return (
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        );
    }
});