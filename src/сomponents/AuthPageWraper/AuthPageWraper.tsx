// import React, {ReactElement} from 'react';
import React, {type PropsWithChildren} from 'react';
import './AuthPageWraper.scss'

// type AuthPageWraperProps = {
//     title: string
//     theme: string
//     children?: ReactElement | ReactElement[]
// }
type AuthPageWraperProps = PropsWithChildren<{
    title: string
    theme: string
}>


export const AuthPageWraper = ({children, title, theme}: AuthPageWraperProps) => {
    return (
        <div className={`Auth-Page-Wraper Auth-Page-Wraper--${theme}`}>
            <a className='Auth-Page-Wraper__back-link' href="/">Back to home</a>
            <h1 className='Auth-Page-Wraper__title'>{title}</h1>
            {children}
        </div>
    );
};
