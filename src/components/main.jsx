import React from 'react';

export let Main = props => {
    return(
        <div>
            <p>Main Component</p>
            {props.children}
        </div>
    );
};