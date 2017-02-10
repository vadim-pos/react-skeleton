import React from 'react';

export let Main = props => {
    return(
        <div>
            <h3 className="main-title">Main Component</h3>
            {props.children}
        </div>
    );
};