import {IconSizes , DefaultStyles}  from ".";
import type { IconStyling } from ".";
export function CloseIcon(props : IconStyling)
{
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${IconSizes[props.Sizes]} ${DefaultStyles}`} onClick={props.onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </>
}