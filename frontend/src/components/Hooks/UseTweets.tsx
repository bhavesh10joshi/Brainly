import axios from "axios";
import { API_URL } from "../Util";
import { useState , useEffect } from "react";
export function UseTweets()
{
    const[Contents , SetContents] = useState([]);
    
    useEffect(function()
    {
        axios.get(`${API_URL}/content/tweets` , {
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