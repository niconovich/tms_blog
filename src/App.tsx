import React, {useState} from 'react';
import './App.scss';


// import {Icon} from './сomponents/Icon/Icon'
import {Input} from 'src/сomponents/Input/Input'
import {PostCard} from 'src/сomponents/Card/Card'
import {AuthPageWraper} from 'src/сomponents/AuthPageWraper/AuthPageWraper'

export const App = () => {
  const [theme,setTheme]=useState('dark')
    return (
        <div>
            <button onClick={()=>setTheme('dark')}>dark</button>
            <button onClick={()=>setTheme('light')}>light</button>
            <AuthPageWraper title='Sign In' theme={theme}>
                <PostCard/>
            </AuthPageWraper>
        </div>
    );
}


