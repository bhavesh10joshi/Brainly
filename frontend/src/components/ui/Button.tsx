import type { ReactElement } from "react"

interface ButtonStyles{
    Variant : "primary" | "secondary" , 
    Size : "sm" | "md" |"lg" | "ul",
    Text : string , 
    Load ?: ReactElement , 
    FrontIcon ?: ReactElement , 
    EndIcon ?: ReactElement , 
    onClick ?: ()=>void , 
    Loading ?: boolean 
};
const HoverStyles = {
    "primary" : "hover:text-[15px] hover:bg-purple-300 hover:text-purple-600 " , 
    "secondary" : "hover:text-[14px] hover:bg-purple-600 hover:text-white"
};
const Variant = {
    "primary" : "text-[15px] bg-purple-600 text-white " , 
    "secondary" : "text-[14px] bg-purple-300 text-purple-600"
}
const DefaultStyles:string = "rounded-md flex items-center";
const SizeStyling = {
    "sm" : "px-2 py-1" , 
    "md" : "py-2 px-4" ,
    "lg" : "py-2 px-6" , 
    "ul" : "py-3 px-6 w-[22rem] mt-[2rem] justify-center"
};

export function Button(props : ButtonStyles)
{   
    return <>
        <button type="button" onClick={props.onClick} className={`${Variant[props.Variant]} ${DefaultStyles} ${SizeStyling[props.Size]} ${HoverStyles[props.Variant]}`}>
            {props.FrontIcon}
            {props.Loading === true ? props.Load : props.Text}
            {props.EndIcon}
            </button>
    </>
}