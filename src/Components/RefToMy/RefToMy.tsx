import React, {useState,useRef} from 'react';
import './RefToMy.css'
import { Button } from 'react-bootstrap';


export const RefToMy = () =>{

        const [pixel, setPixel]= useState(0)

        const ref=useRef<any>(null);
        const handleClick=()=>{
           ref.current.scrollTo(0,pixel)
        }

        return (
            <div>
                <div>
                    <input  value={pixel} onChange={(e)=>setPixel(+e.target.value)}/>
                    <Button onClick={handleClick}>go to</Button>
                </div>
                <div  style={{height:100,width:80, overflow:"scroll"}} ref={ref}
                >
                    <div>123</div>
                    <div>234</div>
                    <div>325</div>
                    <div>112</div>
                    <div>345</div>
                    <div>rwer</div>
                </div>
            </div>
        );

}
