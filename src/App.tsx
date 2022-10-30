import React,{useState} from 'react';
import './App.scss';

import { MyButton } from  './Components/MyButton/MyButton';

import {myAllButtons} from './Components/MyButton/MyButton.data';
import {Icon} from './Components/icon/icon'
import  {Input} from './Components/Input/Input'


export const App=() => {
    const [error,setError]=useState(false)
    const onSubmit=(event:any) => {
        event.preventDefault()
        if (event.target)
        {}
    }
  return (
    <div className="App">
      <MyButton params={myAllButtons.primary} />
        <Icon name='up'/>
      <form onClick={onSubmit}>
          <Input label='tercn'  textError='error' placeholder='ddddddd' />
          <button>Submit</button>
      </form>

    </div>
  );
}


