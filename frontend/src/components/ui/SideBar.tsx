import { Logo } from "../Image/Logo";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { SideButton } from "./SideButton";
export function SideBar()
{
    return <>
    <div className="bg-white fixed border border-slate-300">
     <div className="w-full h-screen w-[20rem]">
        <div className="w-full flex mt-[-1rem]">
            <div>
                <Logo/>
            </div>
            <div className="text-[1.7rem] ml-[0.2rem] font-semibold mt-[3rem]">
                Brainly
            </div>
        </div>
        <div className="w-full pt-[3rem] pl-[1rem] pr-[1rem]">
            <SideButton Text="Tweets" Size="lg" FrontIcon={<TwitterIcon Sizes="lg"/>}/>
            <div className="mt-[1rem]">
                <SideButton Text="Videos" Size="lg" FrontIcon={<YoutubeIcon Sizes="lg"/>}/>
            </div>
        </div>
     </div>
    </div>
    </>
}