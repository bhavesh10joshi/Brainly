export interface IconStyling{
    Sizes : "sm" | "md" | "lg" ,
    onClick ?: ()=>void ,
};
export const DefaultStyles :string = "pr-2";
export const IconSizes = {
    "sm" : "size-5" , 
    "md" : "size-7" ,
    "lg" : "size-9" ,
}

export { PlusIcon } from "./PlusIcon";
export { ShareIcon } from "./ShareIcon";
export { LogOutIcon } from "./LogoutIcon";
export { TwitterIcon } from "./TwitterIcon";
export { YoutubeIcon } from "./YoutubeIcon";
export { CloseIcon } from "./CloseIcon";
export { ClipBoardIcon } from "./ClipBoardIcon";
export { DeleteIcon } from "./DeleteIcon";
export { PageIcon } from "./PageIcon";
