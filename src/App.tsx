import React, {useEffect, useState} from 'react';
import './App.scss';
import {getData} from './tempData'


// import {Icon} from './сomponents/Icon/Icon'
import {Input} from 'src/сomponents/Input/Input'
import {PostCard} from 'src/сomponents/Card/Card'
import {AuthPageWraper} from 'src/сomponents/AuthPageWraper/AuthPageWraper'

export const App = ():any => {
  const [dataTemp,setDataTemp]=useState([])
  useEffect(() =>{
      const formatDate=getData().map(({date, ...rest}:{date:string}) => ({
          year:date.slice(0,4),
          date,
          ...rest
      }))
      setDataTemp(formatDate)
  },[])

  const [theme,setTheme]=useState('dark')

    return (
        <div>
            <button onClick={()=>setTheme('dark')}>dark</button>
            <button onClick={()=>setTheme('light')}>light</button>
            <AuthPageWraper title='Sign In' theme={theme}>
                <PostCard/>
            </AuthPageWraper>
            {dataTemp.map(({title, id,year})=> (
               <p key={id}>1 {title} - {year}</p>
            ))}


            {/*{dataTemp.map(({title, id,year})=> (*/}
            {/*    <p key={id}>1 {title} - {year}</p>*/}
            {/*))}*/}
            {/*{dataTemp.map(({title, id})=> {*/}
            {/*    return (*/}
            {/*        <p key={id}>2 {title}</p>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    );
}


