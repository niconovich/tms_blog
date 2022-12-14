import React, {type ChangeEvent, useState} from 'react';
import './input.scss'

type InputProps ={
    type?:string
    label?:string
    placeholder?:string
    disabled?:boolean
    className?:string
    textError?:string
    error?:boolean
}


export const Input = ({type='text',label,placeholder,disabled=false,className,textError,error=false}:InputProps) => {
    const [value, setValue]= useState('')
    const henleChange=(event:ChangeEvent<HTMLInputElement>) =>{
       // const value=event.target.value()
        const {value : targetValue }=event.target
        if (value.length>10) return
        setValue(targetValue)
    }
    return (
        <label className={`input ${className}`}>
            {label}
            <input
                type={type}
                value={value}
                onChange={henleChange}
                placeholder={placeholder}
                disabled={disabled}/>

            {error&& <span>{textError}</span>}
        </label>

    );
};

