import type { ReactElement } from "react"

interface ButtonStyles{
    Text : string , 
    Size : "sm" | "md" |"lg" ,
    FrontIcon ?: ReactElement , 
    EndIcon ?: ReactElement , 
    onClick ?: ()=>void
};
const hoverEffects : string = "hover:bg-slate-200";  
const DefaultStyles:string = "rounded-md flex items-center text-[15px] bg-white text-black  border flex justify-center items-center w-full";
const SizeStyling = {
    "sm" : "px-2 py-1" , 
    "md" : "py-2 px-4" ,
    "lg" : "py-2 px-6"
};

export function SideButton(props : ButtonStyles)
{   
    return <>
        <button type="button" onClick={props.onClick} className={`${DefaultStyles} ${SizeStyling[props.Size]} ${hoverEffects}`}>
            {props.FrontIcon}
            {props.Text}
            {props.EndIcon}
            </button>
    </>
}