import { CloseIcon } from "../Icons/CloseIcon"
import { InputBox } from "./InputsBox"
import { Button } from "./Button"
import { useRef, useState } from "react";
import axios from "axios";
import { API_URL } from "../Util";
import { useNavigate } from "react-router-dom";

interface PopUpProps {
  open: boolean;
  Closeit: () => void;
}
const Types = {
    "Youtube" : "youtube" , 
    "Twitter" : "twitter"
};
export function PopUp({open , Closeit} : PopUpProps)
{
    const TitleRef = useRef<HTMLInputElement>(null);
    const LinkRef = useRef<HTMLInputElement>(null);
    const Navigate = useNavigate();

    const[Type , SetType] = useState(Types["Youtube"]);
    
    function YoutubeSet()
    {
        SetType(Types["Youtube"]);
    }
    function TwitterSet()
    {
        SetType(Types["Twitter"]);
    }
    async function addcontent()
    {
        const type = Type;
        console.log(type);
        const title = TitleRef.current?.value;
        console.log(TitleRef.current?.value);
        const Link = LinkRef.current?.value;
        console.log(LinkRef.current?.value);
        const token = localStorage.getItem("token");
        
        const user = await axios.post(`${API_URL}/content`,{
            links :  Link ,
            type : type , 
            title : title 
        } , 
        {
            headers:{
                Authorization:token
            }
        }
        );
        if(user)
        {
            alert("Content Added Successfully !");
            Closeit();
            Navigate("/dashboard");
        }
        else
        {
            alert("Error Occurred try again later !");
            Closeit();
        }
    }
    return<>
        {open && <div className="h-screen w-screen bg-slate-500/60 absolute flex justify-center items-center ">
            <div className="bg-white pb-5 ">
                <div className="w-[24rem] place-items-end mt-2 mb-4">
                    <CloseIcon Sizes="lg" onClick={Closeit}/>
                </div>
                <InputBox Size="lg" Placeholder="Title of the content" reference={TitleRef}/>
                <InputBox Size="lg" Placeholder="Link to the content" reference={LinkRef}/>
                <div className="border border-black rounded m-[1rem] ">
                    <div className="text-[1.2rem] font-bold ml-[1rem] mt-[0.2rem]">
                        Type :-
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="p-4">
                            <Button Variant={Type === "twitter" ? "secondary" : "primary"} Size="lg" Text="Twitter" onClick={TwitterSet}/>                        
                        </div>
                        <div className="p-4">
                            <Button Variant={Type === "youtube" ? "secondary" : "primary"} Size="lg" Text="Youtube" onClick={YoutubeSet}/>                  
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Button Variant="primary" Size="lg" Text="Submit" onClick={addcontent}/>
                </div>
            </div>
        </div>}
    </>   
}