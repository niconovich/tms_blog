import React, { useState} from 'react';
import './MyButton.scss';
import {Icon} from 'src/Components/icon/icon'

export const MyButton = (props: any) => {
    const data=props.params;
    const [count, setCount]=useState(1);
    return (
        <button
            className={data.styles}
            disabled={data.disable}
            onClick= {()=>setCount(count+1)}
        >
            <Icon name={data.icon}/>
            {count}
            {/*{data.content}*/}
        </button>
    )
}