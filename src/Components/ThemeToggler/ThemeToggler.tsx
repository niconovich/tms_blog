import React, {useContext} from 'react';
import {ThemeContext} from 'src/contexts';
import {THEMES} from 'src/constants';
import './ThemeToggler.css';
import {Button} from "../Button/Button";

export const ThemeToggler=()=> {

    const {theme, toggleTheme}=useContext(ThemeContext)

    return (
        <div>
            <label className="switch">
                <input type="checkbox" checked={theme===THEMES.dark} onChange={toggleTheme}/>
                    <span className="slider round"></span>
            </label>

            <button  onClick={toggleTheme}>Light</button>
            <button  onClick={toggleTheme}>Dark</button>
            {/*<input type="radio" id="Theme_light"  value="light"  name="theme"/>*/}
            {/*<label htmlFor="Theme_light">Light</label>*/}
            {/*<input type="radio" id="Theme_dark" value="dark"  name="theme"/>*/}
            {/*<label htmlFor="Theme_dark">Dark</label>*/}
        </div>
    );
}

