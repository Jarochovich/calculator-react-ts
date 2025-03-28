import classes from './ModeTheme.module.css';

function ModeButton(props:any) {
    return (
        <div>
            <button onClick={ props.action} className={classes.modeBtn}>{props.name}</button>
        </div>
    );
}

export default ModeButton;