import type { ReactElement } from "react";

interface ButtonProps{
    variant : "primary" | "secondry" ,
    size : "sm" | "md" |"lg" ,
    text : string , 
    starticon ?: ReactElement , 
    endicon ?: ReactElement ,
    onClick?: () => void;
}
const variant = {
    "primary" : "bg-purple-600 text-white flex" , 
    "secondry" : "bg-purple-400 text-purple-600"
}
const defaultstyles = "rounded-md";
const sizeStyles = {
    "sm" : "px-2 py-1" , 
    "md" : "py-2 px-4" ,
    "lg" : "py-4 px-6"
}
export function Button(props : ButtonProps)
{
    return <>
        <button type="button" className={`${variant[props.variant]} ${props.size}  ${defaultstyles}`} onClick={props.onClick}>{props.starticon}{props.text}</button>
    </>
}