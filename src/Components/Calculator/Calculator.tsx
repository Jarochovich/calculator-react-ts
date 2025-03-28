import React, { useState } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import PanelButtons from '../PanelButtons/PanelButtons';
import StyleButton from '../ThemeButtons/ModeButtons/ThemeButtons';

function Calculator(props:any) {

    const [result, setResult] = useState("0");
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [firstSet, setFirstSet] = useState(true);
    const [remember, setRemember] = useState("");
    const [lastRemember, setLastRemember] = useState("");
    const [error, setError] = useState("");
    
    const setNumber = (num: string) => {

        if (num === '.' && !result.includes('.')) {
            setResult(`${result}${num}`);
            setFirstSet(false);
        }
        else { 
            if (firstSet) {
                setResult(`${num === '.' ? "" : num}`); // Ввод первого числа
                setFirstSet(false);
            } else {
                setResult(`${result === "0" ? "" : result}${num === '.' ? "" : num}`); // Продолжение ввода числа
            }
        }

        if(error !== "") {
            setError("");
            setLastRemember("");
            setRemember("");
        } 
    };


    const changeType = (newType:any) => {
        setError("");
        setType(newType);
        setFirstSet(true);
        if (lastRemember === '') {
            setRemember(result + ' ' + newType);
        } else {
            setRemember(result + ' ' + newType);
        }
        setValue(result);
    }

    const clearAll = () => {
        setError("");
        setResult("0");
        setValue("");
        setType("");
        setFirstSet(true);
        setRemember('');
        setLastRemember('');
    }

    const clearLast = () => {
        result.length === 1 ? setResult("0") :  setResult(result.slice(0, -1));
    }
    
    const changeSign = () => {
        if (result === '0') {}
        else {
            let newResult: string = `${Number(result) * (-1)}`;
            setResult(newResult);
        }
    }

    const changeNumberPlace = (newType:any) => {
  
        changeType(newType);
    
        let newValue: number = 0;
        switch (type) {
            case '/':
                if(Number(result) === 0)
                {
                    changeError("деление на 0");
                    return;
                }

                newValue = Number(value) / Number(result);
                setResult(`${newValue}`);
                break;
            case '*':
                newValue = Number(value) * Number(result);
                setResult(`${newValue}`);
                break;
            case '+':
                newValue = Number(value) + Number(result);
                setResult(`${newValue}`);
                break;
            case '-':
                newValue = Number(value) - Number(result);
                setResult(`${newValue}`);
                break;
            default:
                return;
        }
    
        setFirstSet(true);
        setValue("0"); // Сбрасываем значение второго числа
        setType(""); // Сбрасываем оператор
        setRemember("");
        setLastRemember(lastRemember + ' ' + remember + ' ' + result + ' ' + ` = ${newValue}; `);
    };

    const changeError = (error:string) => {
        setError(`${error}`);
        setFirstSet(true);
        setValue("0"); // Сбрасываем значение второго числа
        setType(""); // Сбрасываем оператор
        setRemember("");
        setLastRemember(`Ошибка: ${error}!`);

    }

    const functions = {
        setNumber: setNumber,
        clearAll: clearAll,
        clearLast: clearLast,
        changeSign: changeSign,
        changeNumberPlace: changeNumberPlace,
        changeType: changeType
    }

    const display = {
        result: result,
        remember: remember,
        lastRemember: lastRemember
    }

    return (
        <div className='calculator'>
            <Display display = {display}/>
            <PanelButtons store = {props.store} actions = {functions}/>
        </div>
    );
}

export default Calculator;