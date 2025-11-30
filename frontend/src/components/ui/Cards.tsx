interface CardStyle{
    Variant : "md" | "lg" 
}; 
const CardsVariant = {
    "md" : "w-md" , 
    "lg" : "w-lg"    
};
const DefaultStyles:string = "border bg-color-white"; 

export function Card(prop : CardStyle)
{
    return <>
        <div className={`${CardsVariant[prop.Variant]} ${DefaultStyles}`}>
        hello there
        </div>
    </>
}