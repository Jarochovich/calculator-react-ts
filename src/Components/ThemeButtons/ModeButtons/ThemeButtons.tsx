import ModeButton from './ModeButton/ModeButton';
import classes from './ThemeButton.module.css'

function ThemeButtons(props:any) {
    return (
        <div className={classes.mode}>
            <ModeButton name = {props.themes.Light} action = {props.actions.handleLightThemeClick}/>
            <ModeButton name = {props.themes.Dark} action = {props.actions.handleDarkThemeClick}/>
        </div>
    );
}

export default ThemeButtons;