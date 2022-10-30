import React from "react";
import './Icon.scss'
import {ReactComponent as IconDown} from  "../../assets/image/iconDown.svg";
import {ReactComponent as IconUp} from  "../../assets/image/iconUp.svg";
import {ReactComponent as IconBookmark} from  "../../assets/image/iconBookMark.svg";

type IconSettings = {
    name: string
}

 export const Icon = ({name}:IconSettings):any => {
   switch (name) {
       case 'down':
           return <IconDown />
       case 'up':
           return <IconUp />
        case 'bookmark':
        return <IconBookmark
            nameClass='icon-button'/>
       default:
           return null
   }
};

