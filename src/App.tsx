import React,{useState} from 'react';
import './App.scss';

import {postData} from './data'
import {PostСard} from "./Components/PostСard/PostСard";

export const App=() => {
    const [error,setError]=useState(false)
    const onSubmit=(event:any) => {
        event.preventDefault()
        if (event.target)
        {}
    }
  return (
    <div className="App">
        <div>
            <PostСard typePostСard='default' id={postData.id} author={postData.author} title={postData.title} image={postData.image} text={postData.text} date={postData.date} lesson_num={postData.lesson_num} />
            <PostСard typePostСard='average' id={postData.id} author={postData.author} title={postData.title} image={postData.image} text={postData.text} date={postData.date} lesson_num={postData.lesson_num}/>
            <PostСard typePostСard='small' id={postData.id} author={postData.author} title={postData.title} image={postData.image} text={postData.text} date={postData.date} lesson_num={postData.lesson_num} />

        </div>
    </div>
  );
}


