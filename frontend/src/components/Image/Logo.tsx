import { ImageStyles } from "./Index"
import BrainlyLogo from "../Media/BrainlyLogo.png";
export function Logo()
{
 return <>
 <img src={BrainlyLogo} alt="" className={`${ImageStyles}`}/>
 </>
}