import axios from "axios";
import { API_URL } from "../Util";
import { useState , useEffect } from "react";
export function UseVideos()
{
    const[Contents , SetContents] = useState([]);
    
    useEffect(function()
    {
        axios.get(`${API_URL}/content/videos` , {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        }).then((response)=>{
            SetContents(response.data.msg);
        });
    } 
    , []);
    return Contents;
}