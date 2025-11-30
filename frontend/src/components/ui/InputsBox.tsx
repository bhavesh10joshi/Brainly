interface InputStyles{
    Size : "sm" | "md" |"lg" , 
    Placeholder : string 
}
const InputStyles = {
    "sm" : "w-[10re,] h-[0.5rem]" , 
    "md" : "w-[17rem] h-[2rem]" ,
    "lg" : "w-[22rem] h-[3rem]"
}
const DefaultStyles :string = "border-[3px] mt-2 flex items-center justify-center p-2 border-black mb-3";
export function InputBox(props : InputStyles)
{   
    return<>
        <div className="w-full flex items-center justify-center">
            <input placeholder={props.Placeholder} type="text" className={`${InputStyles[props.Size]} ${DefaultStyles}`}/>
        </div>
    </>
}   