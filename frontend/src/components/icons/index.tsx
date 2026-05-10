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

export * from "./PlusIcon";
export * from "./ShareIcon";
export * from "./LogoutIcon";
export * from "./TwitterIcon";
export * from "./YoutubeIcon";
export * from "./CloseIcon";
export * from "./ClipBoardIcon";
export * from "./DeleteIcon";
export * from "./PageIcon";