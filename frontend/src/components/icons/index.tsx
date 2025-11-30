export interface IconStyling{
    Sizes : "sm" | "md" | "lg" ,
    onClick ?: ()=>void
};
export const DefaultStyles :string = "pr-2";
export const IconSizes = {
    "sm" : "size-5" , 
    "md" : "size-7" ,
    "lg" : "size-9" ,
}