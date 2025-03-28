import './Remember.css';

function Remember(props:any) {
    return (
        <div className='remember'>
            <p className='rememberText'>{props.remembers.lastRemember} {props.remembers.remember}</p>
        </div>
    );
}

export default Remember;