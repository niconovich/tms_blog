import React from "react";
import {THEMES} from './constants';

const ThemeContext=React.createContext({theme:THEMES.light,toggleTheme:()=>{}});

export {ThemeContext}