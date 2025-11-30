import { ShareIcon } from "../Icons/ShareIcon";
import { PageIcon } from "../Icons/PageIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";

interface CardStyling{
    TopHead : string , 
    Type : "Article" | "Youtube" | "Twitter" , 
    Date : string , 
    Link : string
};
function getYouTubeEmbedUrl(url: string): string {
  const match = url.match(/(?:v=|\.be\/)([^&]+)/);
  const id = match ? match[1] : "";
  return `https://www.youtube.com/embed/${id}`;
}
function getTwitterEmbedUrl(url: string): string {
  return url
    .replace("x.com", "twitter.com")
    .replace("mobile.twitter.com", "twitter.com");
}

export function Card(props : CardStyling)
{
    return <>
    <div className="w-[25rem] m-3 p-2 border-[3px] rounded">
        <div className={"flex items-center"}>
            <div>
                {props.Type === "Article" ? <><PageIcon Sizes="lg"/></> : null}
                {props.Type === "Youtube" ? <><YoutubeIcon Sizes="lg"/></> : null}
                {props.Type === "Twitter" ? <><TwitterIcon Sizes="lg"/></> : null}
            </div>
            <div className="w-[18rem] ml-2 mr-2">
                {props.TopHead}
            </div>
            <div>
                <a href={props.Link} target="_blank"><ShareIcon Sizes="md"/></a>
            </div>
            <div>
                <DeleteIcon Sizes="md"/>
            </div>
        </div>
        <div>
            {props.Type === "Youtube" ? <>
            <iframe className="w-full h-[20rem] mt-[10px] mb-[20px] rounded" src={getYouTubeEmbedUrl(props.Link)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </>  : null}
            {props.Type === "Twitter" ? <>
                <blockquote className="twitter-tweet">
                    <a href={getTwitterEmbedUrl(props.Link)}></a>
                </blockquote>
            </> : null}
        </div>
        <div className=" text-slate-500">
                Added On {props.Date}
        </div>
    </div>
    </>
}