import React, {useContext, useState} from 'react';
import './Hoc.scss'
import {ThemeContext} from 'src/contexts';
import {ThemeToggler} from 'src/components/ThemeToggler/ThemeToggler';

// type Hoc = {
//     object: any
// }

export const Hoc=(props:{object:any}) => {
    const {theme, toggleTheme}=useContext(ThemeContext)
    const [active, setActive]=useState(false);
    const hanleClick=() => {setActive(!active)}
    console.log(active)
    return (
        <div style={{border:`1px solid ${active?'red':'blue'}`}}  onClick={()=>hanleClick()}>
           {props.object}

        </div>
    );
}

