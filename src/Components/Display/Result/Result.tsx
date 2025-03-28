import classes from './Result.module.css';

function Result(props:any) {
    return (
        <div className={classes.place}>
           <p>=</p>
           <p className={classes.res}>{props.result}</p>
        </div>
    );
}

export default Result;