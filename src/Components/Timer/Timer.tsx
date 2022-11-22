import React, {useEffect, useState} from 'react';
import Time from './Time'
import Button from './Button'
// type Hoc = {
//     object: any
// }

export const Timer=() => {
    const [seconds, setSeconds]=useState(0);
    const [timerId, setTimerId]=useState(0);
    useEffect(() => {
            console.log("Готов работать")
        }
        ,[]);
    useEffect(() => {
         if (seconds>9) { hanleStopTime()  }
        }
    ,[seconds]);
    useEffect(() => {
            if (timerId!==0) { alert(timerId) }
            console.log(timerId)
        }
        ,[timerId]);
    useEffect(() => {
            return ()=> hanleStopTime()
        }
        ,[]);

    const hanleStartTime=()=> {
        setSeconds(0);
        setTimerId( +setInterval(()=>{
            setSeconds((prev) =>prev+1)
        },1000))
    }

    const hanleStopTime=()=> {
        clearInterval(timerId);
        setTimerId(0);
    }


    return (
        <div>
            <Time seconds={seconds}/>
            <Button hanleStartTime={hanleStartTime} hanleStopTime={hanleStopTime} timerId={timerId}/>
        </div>

    );
}

