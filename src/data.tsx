import React, { useState } from 'react';

type Post={
    id: number
    image: string
    text: string
    date : Date
    lesson_num: number
    title: string
    author: number
}


export const postData:Post={
    id: 11,
    image: "https://cdn.pixabay.com/photo/2022/01/27/21/39/flower-6973184_960_720.jpg",
    text: "Sure, we have an idea. Usually it’s a pretty good idea. But we can only ever give people what amounts to a new canvas to work with. They (and you) are the ones who ultimately get to decide what goes on it. That’s the beauty of a public conversation that’s open to everyone — it leaves plenty of room for surprises and creativity. ",
    date:new Date("2021-10-09"),
    lesson_num:88,
    title: "A meme is born: How people are taking mixed media viral on Twitter",
    author: 133
}

