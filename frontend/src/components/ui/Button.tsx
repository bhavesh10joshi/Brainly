import type { ReactElement } from "react"

interface ButtonStyles{
    Variant : "primary" | "secondary" , 
    Size : "sm" | "md" |"lg" ,
    Text : string , 
    FrontIcon ?: ReactElement , 
    EndIcon ?: ReactElement , 
    onClick ?: ()=>void
};

const Variant = {
    "primary" : "text-[15px] bg-purple-600 text-white " , 
    "secondary" : "text-[14px] bg-purple-300 text-purple-600"
}
const DefaultStyles:string = "rounded-md flex items-center";
const SizeStyling = {
    "sm" : "px-2 py-1" , 
    "md" : "py-2 px-4" ,
    "lg" : "py-2 px-6"
};

export function Button(props : ButtonStyles)
{   
    return <>
        <button type="button" onClick={props.onClick} className={`${Variant[props.Variant]} ${DefaultStyles} ${SizeStyling[props.Size]}`}>
            {props.FrontIcon}
            {props.Text}
            {props.EndIcon}
            </button>
    </>
}