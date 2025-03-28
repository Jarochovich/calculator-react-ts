import { useEffect, useState } from 'react';
import './ButtonsNumbers.css';
import Button from '../Button/Button';

function ButtonsNumbers(props: any) {

    const onKey = (event: any) => {
        const pressedKey = event.key;
        if (props.numbers.includes(pressedKey)) {
            props.actions.setNumber(pressedKey); // Вызываем действие для ввода числа
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("keydown", onKey);
        };
    }, [props.numbers, props.actions]);

    return (
        <div className='mainNumbers'>
            {props.numbers.map((num: any) => (
                <Button actions={props.actions.setNumber} value={num} key={num} />
            ))}
        </div>
    );
}

export default ButtonsNumbers;
