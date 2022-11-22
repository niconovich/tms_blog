import React from 'react';

function Button(props:{hanleStartTime:Function, hanleStopTime:Function, timerId:number}) {
    const {hanleStartTime,hanleStopTime,timerId}=props;
    const isTimerStarted= timerId!==0;

    return (
        <button onClick={()=>isTimerStarted?hanleStopTime():hanleStartTime()}
        style={{backgroundColor: isTimerStarted?'red':'green'}}>
            {isTimerStarted?'СТОП':'СТАРТ'}
        </button>
    );
}

export default Button;