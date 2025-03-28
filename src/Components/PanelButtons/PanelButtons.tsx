import './PanelButtons.css';
import ButtonsNumbers from '../ButtonsNumbers/ButtonsNumbers';
import ButtonsOperations from '../ButtonsOperations/ButtonsOperations';
import ButtonsTools from '../ButtonsTools/ButtonsTools';

function PanelButtons(props:any) {

    return (
        <div className='panel'>
            <ButtonsTools tools = {props.store.tools} actions = {props.actions}/>
            <ButtonsNumbers numbers = {props.store.numbers} actions = {props.actions}/>
            <ButtonsOperations operations = {props.store.operations} actions = {props.actions}/>
        </div>
    );
}

export default PanelButtons;