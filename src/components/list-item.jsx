let React = require('react');
let ListItem = React.createClass({
    render() {
        return (
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        )
    }
});

module.exports = ListItem;