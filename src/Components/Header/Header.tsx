import React, {useContext} from "react";
import {ThemeContext} from 'src/contexts';
import {ThemeToggler} from 'src/components/ThemeToggler/ThemeToggler';
import {THEMES} from 'src/constants';

export const Header=()=>{
    const {theme}=useContext(ThemeContext)
    const themeStyle={
        [THEMES.light]:{
            backgroundColor:'lightgray',
            color:'black'
        },
        [THEMES.dark]:{
            backgroundColor:'black',
            color:'white'
        },
    }
    return (
        <header style={{height:50, textAlign:"center",...themeStyle[theme]}}>
            Hello I'm header
        </header>
    )

}