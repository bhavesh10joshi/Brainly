import express from "express";
import {Request , Response , NextFunction} from "express";
import jwt from "jsonwebtoken";
const App = express();
App.use(express.json());
const USER_SECRET : string = "iamtheusersecret";
 
export function usermiddleware(req:any,res:Response,next:NextFunction)
{
    const token = req.headers["Authorization"];
    const verification:any = jwt.verify(token as string , USER_SECRET);

    if(verification)
    {
        req.UserId = verification.id;
        next();
    }
    else
    {   
        res.status(404).json({
            msg : "Internal Server Error !"
        });
    }   
}


