import React from 'react';
import './PostCard.scss'
import {FooterPostCard} from 'src/Components/FooterPostCard/FooterPostCard'
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

type TypePostСard = 'default'|'average'|'small'
type PostСardSettings ={
    typePostСard?:TypePostСard
    disabled?:boolean
    id: number
    image?: string
    text?: string
    date: Date
    lesson_num?: number
    title: string
    author?: number
}


export const PostСard = ({typePostСard='default', disabled=false,id,image,text,date,lesson_num,title,author}:PostСardSettings) => {
   let titleSize='defaultTitle'
       if (title?.length>70) {titleSize='longTitle'}
       if (title?.length<0) {titleSize='smalTitle'}

    return (
        <div id={id?.toString()} className={typePostСard}>
            <div id="CardBody">
                <div>
                    <div id="DatePost">{date.toDateString()}</div>
                    <div id="TitlePost" className={titleSize} >{title}</div>
                    <div id="TextPost" >{text}</div>
                </div>
                <img src={image} alt="Picture post"/>
            </div>
                <FooterPostCard typePostСard={typePostСard} />
        </div>
    );
};

