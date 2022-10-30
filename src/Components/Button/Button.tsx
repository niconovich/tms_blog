import React, { useState } from 'react';
import {Icon} from 'src/Components/Icon/Icon'
import './Button.scss'

type ButtonSettings = {
    content?: string
    styles: string
    disabled?: boolean
    icon?: string
}

export const Button=({content,styles,disabled=false,icon=''}: ButtonSettings) => {
    const [count, setCount]=useState(1);
    return (
        <button
            className={styles}
            disabled={disabled}
            onClick= {()=>setCount(count+1)}
            >
    <Icon name={icon}/>
     {content} {/*{count}*/}
    </button>
    );
}

