import './App.css';
import Calculator from './Components/Calculator/Calculator';
import store from './Redux/Redux';
import StyleButton from './Components/ThemeButtons/ModeButtons/ThemeButtons';
import {useTheme} from './Hooks/useTheme';
import ThemeButtons from './Components/ThemeButtons/ModeButtons/ThemeButtons';

function App() {
  const {theme, setTheme} = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  }

  const handleDarkThemeClick = () => {
    setTheme('dark');
  }

  const themes = {"Light": "Light", "Dark": "Dark"};
  const actions = {
    handleLightThemeClick: handleLightThemeClick,
    handleDarkThemeClick: handleDarkThemeClick
  }

  return (
    <div className='app'>
        <ThemeButtons themes = {themes} actions = {actions}/>
        <Calculator store = {store}/>
    </div>
  );
}

export default App;
