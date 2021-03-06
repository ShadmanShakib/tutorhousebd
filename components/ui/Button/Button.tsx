import React, { ButtonHTMLAttributes } from 'react';
import css from './Button.module.css'
import cn from 'classnames';



export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text:string,
    href?:string,
    variant?: "primary" | "secondary"| "empty",
    onclick?: ()=>void,
}

function Button(props:ButtonProps) {
    const rootClassname=cn(
        css.root,
        {
            [css.primary]: props.variant==='primary',
            [css.secondary]: props.variant==="secondary",
            ["border-2 border-secondary text-secondary  "]:props.variant==="empty"
        }
        )
    return (
        
            <button className={rootClassname}>
                {props.text}
            </button>
        
    )
}

export default Button

