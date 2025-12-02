import axios from "axios";
import { API_URL } from "../Util";
import { useState , useEffect } from "react";
export function UseContent()
{
    const[Contents , SetContents] = useState([]);
    
    useEffect(function()
    {
        axios.get(`${API_URL}/content` , {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        }).then((response)=>{
            SetContents(Contents);
        });
    } 
    , []);
    return Contents;
}