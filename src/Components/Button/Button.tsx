import React from 'react';
import './Button.css';

function Button(props:any) {
    
    return (
        <div>
            <button onClick={() => props.actions(props.value)} className={props.className}>{props.value}</button>
        </div>
    );
}

export default Button;