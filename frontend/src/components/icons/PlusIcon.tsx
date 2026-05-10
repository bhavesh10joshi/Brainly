import {IconSizes , DefaultStyles}  from ".";
import type { IconStyling } from ".";
export function PlusIcon(props : IconStyling)
{
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${IconSizes[props.Sizes]} ${DefaultStyles}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    </>
}