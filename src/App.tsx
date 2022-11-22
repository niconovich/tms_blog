import React,{useState} from 'react';
import {THEMES} from './constants';
import './App.scss';
//import { Button } from  './components/Button/Button';

import {postData} from './data';
// import {PostСard} from "./components/PostСard/PostСard";
// import { Hoc } from  './components/Hoc';
// import {Input} from './components/Input/Input';
//import {ThemThoggler} from 'src/components/ThemeToggler/ThemThoggler';
import {Timer} from './components/Timer/Timer';
import {Hoc} from './components/Hoc/Hoc';
import {ThemeContext} from './contexts';
import {Header} from "./components/Header/Header";
import {ThemeToggler} from "./components/ThemeToggler/ThemeToggler";
import {RefToMy} from "./components/RefToMy/RefToMy";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App=() => {
    const [error,setError]=useState(false)
    const [theme, setTheme]=useState(THEMES.light)
    const toggleTheme=() => {
        setTheme(theme===THEMES.light?THEMES.dark:THEMES.light)
    }
    const onSubmit=(event:any) => {
        event.preventDefault()
        if (event.target)
        {}
    }

  return (
      <div>
          <ThemeContext.Provider value={{theme, toggleTheme}}>
              <Header/>
              <ThemeToggler />
              <RefToMy />
          {/*<div>*/}
          {/*    <Hoc object={<Timer/>}/>*/}
          {/*</div>*/}
    {/*  <div>*/}
    {/*      <Button styles="primary-button" content="Primary"  />*/}
    {/*      <Button styles="secondary-button" content="secondary"  />*/}
    {/*      <Button styles="secondary2-button" content="secondary 2"  />*/}
    {/*      <Button styles="button-with-icon" content="Button with icon" icon="bookmark" />*/}
    {/*      <Button styles="like-button" icon="up" />*/}
    {/*      <Button styles="dizlike-button"  icon="down" />*/}
    {/*  </div>*/}
    {/*<div>*/}
    {/*    <Button styles="primary-button" content="Primary" disabled={true}  />*/}
    {/*    <Button styles="secondary-button" content="secondary" disabled={true} />*/}
    {/*    <Button styles="secondary2-button" content="secondary 2" disabled={true} />*/}
    {/*    <Button styles="button-with-icon" content="Button with icon" icon="bookmark" disabled={true} />*/}
    {/*    <Button styles="like-button" icon="up" disabled={true} />*/}
    {/*    <Button styles="dizlike-button"  icon="down" disabled={true}/>*/}
    {/*</div>*/}
          {/*<div>*/}
          {/*    <PostСard typePostСard='default' id={postData.id} author={postData.author} title={postData.title} image={postData.image} text={postData.text} date={postData.date} lesson_num={postData.lesson_num} />*/}
          {/*    <PostСard typePostСard='average' id={postData.id} author={postData.author} title={postData.title} image={postData.image} text={postData.text} date={postData.date} lesson_num={postData.lesson_num}/>*/}
          {/*    <PostСard typePostСard='small' id={postData.id} author={postData.author} title={postData.title} image={postData.image} text={postData.text} date={postData.date} lesson_num={postData.lesson_num} />*/}

          {/*</div>*/}
          </ThemeContext.Provider>
    </div>
  );
}



