import express from "express";
import {Request , Response} from "express";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;
import { string, z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {usermiddleware} from "./middleware/user"
import {UserModel , ContentModel , LinkModel} from "./db"
import tr from "zod/v4/locales/tr.js";

const USER_SECRET : string = "iamtheusersecret";
const ADMIN_SECRET : string = "iamtheadminsecret";
const mongoose_url:string = "here is the mongoose url";
mongoose.connect(mongoose_url);

const App = express();
App.use(express.json());

enum SignUpStatuscodes  {
    SignedUp = 200 ,
    UserAlreadyExists = 403 , 
    ErrorInInputs = 411 , 
    ServerError = 500 
};
enum SignInStatuscodes  {
    SignedIn = 200,
    WrongEmailPassword = 403 ,  
    InternalServerError = 500 
};
enum Contentadd  {
    ContentAdded = 200,  
    InternalServerError = 500 
};
enum DeleteDocument{
    DeleteSuccess = 200 , 
    Documentyoudontown = 403
};
const zodobject = z.object({
    username : z.string().min(3).max(10) , 
    password : z.string().min(8).max(20).regex(/[A-Z]/ ,{ message : "Password should contain atleast one Uppercase Letter !"})
                                        .regex(/[a-z]/ ,{ message : "Password should contain atleast one Lowercase Letter !"})
                                        .regex(/[0-9]/ ,{ message : "Password should contain atleast one Number !"})
                                        .regex(/[^A-Za-z0-9]/ ,{ message : "Password should contain atleast one Uppercase Letter !"})
});
type ZodInference = z.infer<typeof zodobject>;

App.post("/api/v1/signup" , async function(req : Request,  res:Response)
{
    const signup:ZodInference = req.body;
    const safeparseobject = zodobject.safeParse(req.body);

    if(safeparseobject)
    {
        const hashedpassword = await bcrypt.hash(signup.password , 5);
        if(hashedpassword)
        {
            try{
                await UserModel.create({
                    username : signup.username ,
                    password : hashedpassword
                });
                res.status(SignUpStatuscodes.SignedUp).json({
                    msg : "Sucessfully Signed Up !"
                });
            }
            catch(e)
            {
                res.status(SignUpStatuscodes.ServerError).json({
                    msg :"Internal Server Error !"
                });
            }
        }
        else{
            res.json(SignUpStatuscodes.ServerError).json({
                msg : "Internal Server Error !"
            });
        }
    }
    else{
        res.status(SignUpStatuscodes.ErrorInInputs).json({
            msg : "Credentials Entered are wrong !"
        });
    }
});
App.post("/api/v1/signin",async function(req:Request , res:Response)
{
    const username = req.body.username ;
    const password = req.body.password ; 

    const RealUser = await UserModel.findOne({
        username : username
    });
    if(RealUser)
    {
        try{
            await bcrypt.compare(password , RealUser.password);
            
            const Token = jwt.sign({
                id : RealUser._id
            } , USER_SECRET);

            if(Token)
            {
                res.status(SignInStatuscodes.SignedIn).json({
                    msg : Token
                });
            }
            else
            {
                res.status(SignInStatuscodes.InternalServerError).json({
                    msg : "Internal Server error !"
                });
            }
        }
        catch(e)
        {
            res.status(SignInStatuscodes.WrongEmailPassword).json({
                msg:"Password Provided is Wrong !"
            })
        }
    }
    else
    {
        res.status(SignInStatuscodes.WrongEmailPassword).json({
            msg : "Wrong Email Provided !" 
        }); 
    }
});
App.post("/api/v1/content" ,usermiddleware, async  function(req:Request,res:Response)
{
    const UserId = req.body;
    const links = req.body.links;
    const type = req.body.type;
    const title = req.body.title;
    
    try{
        await ContentModel.create({
            links : links ,     
            type : type , 
            title : title , 
            tags : [] , 
            userId : new ObjectId(UserId)
        });
        res.status(Contentadd.ContentAdded).json({
            msg : "Content Added successfully !"
        });
    }
    catch(e)
    {
        res.status(Contentadd.InternalServerError).json({
            msg : "Internal Server Error Occurred !"
        });
    }
});
App.get("/api/v1/content" , usermiddleware , async function(req:Request , res:Response){
    const UserId = req.body;
    try{
        const Content = await ContentModel.find({
            userId : UserId
        }).populate("userId" , "username userId");
        res.status(Contentadd.ContentAdded).json({
            msg : Content
        });
    }
    catch(e)
    {
        res.status(Contentadd.InternalServerError).json({
            msg : "Internal Server Error Occured !" 
        });
    }
});
App.delete("/api/v1/content",usermiddleware,async function(req : Request , res:Response)
{
    const UserId = req.body.UserId;
    const contentId = req.body.contentId;
    try{
        await ContentModel.deleteOne({
            _id : contentId,
            userId : UserId
        });
        res.status(DeleteDocument.DeleteSuccess).json({
            msg : "Document Deleted Successully !"
        });
    }
    catch(e)
    {   
        res.status(DeleteDocument.Documentyoudontown).json({
            msg : "This Document is not owned by you !"
        });
    }
});
App.listen(3000);
