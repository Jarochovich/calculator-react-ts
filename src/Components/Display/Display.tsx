import React from 'react';
import classes from './Display.module.css';
import Remember from './Remember/Remember';
import Result from './Result/Result';

function Display(props:any) {
    return (
        <div>
            <Remember remembers = {props.display}/>
            <Result result = {props.display.result}/>
        </div>
    );
}

export default Display;