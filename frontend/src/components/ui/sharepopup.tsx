import { CloseIcon } from "../Icons/CloseIcon"
import { InputBox } from "./InputsBox"
import { Button } from "./Button"
import { useRef, useState } from "react";
import axios from "axios";
import { API_URL } from "../Util";
import { useNavigate } from "react-router-dom";
import { ClipBoardIcon } from "../Icons/ClipBoardIcon";

interface PopUpProps {
  Share: boolean;
  CloseShareit: () => void;
}

export function SharePopUp({Share , CloseShareit} : PopUpProps)
{
    async function shareit()
    {
        const token = localStorage.getItem("token");

        const user = await axios.post(`${API_URL}/brain/share` , {
            share : true  
        } ,
        {
            headers : {
                Authorization : token
            }
        });

        if(user)
        {
            try{
                await navigator.clipboard.writeText(`${API_URL}/brain/${user.data.Link}`);
                alert("Copied Sucessfully !");
            }
            catch(e)
            {
                alert("Error Ocurred , Try Again Later !");    
            }
        }
        else
        {
            alert("Error Ocurred , Try Again Later !");
        }
    }
    return<>
        {Share && <div className="h-screen w-screen bg-slate-500/60 absolute flex justify-center items-center ">
            <div className="bg-white pb-5 rounded">
                <div className="w-[30rem] mt-2 mb-4">
                    <div className="flex">
                        <div className="pt-[1rem] pl-[1rem] mb-[1rem] font-bold text-[1.2rem]">
                            Share Your Second Brain
                        </div>
                        <div className="mt-[0.8rem] ml-[12.5rem]">
                            <CloseIcon Sizes="lg" onClick={CloseShareit}/>
                        </div>
                    </div>
                    <div className="ml-[1rem] text-slate-500 text-[0.9rem] mt-[1rem]">
                        Share yor entire collection of youtube videos and tweets with others . They'll be able to import your content into their own Second Brain . 
                    </div> 
                    <div>
                        <Button Variant="Share" Size="ul" Text="Share Brain" FrontIcon={<ClipBoardIcon Sizes="lg"/>} onClick={shareit}/>
                    </div>
                </div>
            </div>
        </div>}
    </>   
}