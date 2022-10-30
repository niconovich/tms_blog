import React from "react";
import {ReactComponent as IconDown} from  "../../assets/image/iconDown.svg";
import {ReactComponent as IconUp} from  "../../assets/image/iconUp.svg";
import {ReactComponent as IconBookmark} from  "../../assets/image/iconBookMark.svg";

 export const Icon = ({name}:any):any => {
   switch (name) {
       case 'down':
           return <IconDown />
       case 'up':
           return <IconUp />
        case 'bookmark':
        return <IconBookmark />
       default:
           return null
   }
};

