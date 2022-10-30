import React from 'react';
import './FooterPostCard.scss'
import {ReactComponent as IconDown} from  "../../assets/image/iconDown.svg";
import {ReactComponent as IconUp} from  "../../assets/image/iconUp.svg";
import {ReactComponent as IconBookmark} from  "../../assets/image/iconBookMark.svg";
import {ReactComponent as IconMoreHorizontal} from  "../../assets/image/iconMoreHorizontal.svg";


type FooterPostCardSettings = {
    typePostСard: string
}

export const FooterPostCard=({typePostСard='default'}:FooterPostCardSettings) => {
    return (
        <div className={typePostСard}>
            <div id="footerButtons">
                <div>
                    <IconUp /> <label>20</label>
                    <IconDown /><label></label>
                 </div>
                <div>
                    <IconBookmark />
                    <IconMoreHorizontal />
                </div>
            </div>
            <hr/>
        </div>
    );
}

