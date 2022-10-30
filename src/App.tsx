import React,{useState} from 'react';
import './App.scss';

import { Button } from  './Components/Button/Button';

import {Input} from './Components/Input/Input'


export const App=() => {
    const [error,setError]=useState(false)
    const onSubmit=(event:any) => {
        event.preventDefault()
        if (event.target)
        {}
    }
  return (
      <div>
      <div>
          <Button styles="primary-button" content="Primary"  />
          <Button styles="secondary-button" content="secondary"  />
          <Button styles="secondary2-button" content="secondary 2"  />
          <Button styles="button-with-icon" content="Button with icon" icon="bookmark" />
          <Button styles="like-button" icon="up" />
          <Button styles="dizlike-button"  icon="down" />
      </div>
    <div>
        <Button styles="primary-button" content="Primary" disabled={true}  />
        <Button styles="secondary-button" content="secondary" disabled={true} />
        <Button styles="secondary2-button" content="secondary 2" disabled={true} />
        <Button styles="button-with-icon" content="Button with icon" icon="bookmark" disabled={true} />
        <Button styles="like-button" icon="up" disabled={true} />
        <Button styles="dizlike-button"  icon="down" disabled={true}/>
    </div>

    </div>
  );
}


