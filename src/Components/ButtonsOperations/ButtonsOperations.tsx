import './ButtonsOperations.css';
import Button from '../Button/Button';

function ButtonsOperations(props:any) {
    
    return (
        <div className='function'>

            {props.operations.map( (op:any) => <Button actions = {props.actions.changeNumberPlace} value = {op} /> )}
            
        </div>
    );
}

export default ButtonsOperations;