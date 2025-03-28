import './ButtonsTools.css';
import Button from '../Button/Button';

function ButtonsTools(props:any) {

let actions = () => {

}

    return (
        <div className='tools'>

            {props.tools.map( (t:any) => {
                if (t === 'AC') {
                    actions = props.actions.clearAll
                } else if( t === 'C') {
                    actions =  props.actions.clearLast
                } else if (t === '+/-') {
                    actions = props.actions.changeSign 
                }
                return <Button actions = {actions} value = {t} />
               })}
            
        </div>
    );
}

export default ButtonsTools;