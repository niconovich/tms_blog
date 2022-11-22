import React from 'react';

function Time(props:{seconds:number}) {
    const {seconds}=props;
    return (
        <div>{seconds}</div>
    );
}

export default Time;