import { ImageStyles } from "./Index"
import BrainlyLogo from "../Media/BrainlyLogo.svg";
export function Logo()
{
 return <>
 <img src={BrainlyLogo} alt="" className={`${ImageStyles}`}/>
 </>
}