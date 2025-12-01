import express from "express";
import {Request , Response} from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import {check, z} from "zod";
import mongoose from "mongoose";
import { USER_SECRET } from "../Config";
import {usermiddleware} from "../middleware/user";
const ObjectId = mongoose.Types.ObjectId;
import {UserModel , ContentModel , LinkModel} from "../db"
import { Router } from "express";
import { generateSmallId } from "../Nanoid/Nanoid";

const UserRouter = Router();
UserRouter.use(express.json());

enum SignUpStatuscodes  {
    SignedUp = 200 ,
    UserAlreadyExists = 403 , 
    ErrorInInputs = 411 , 
    ServerError = 500 
};
enum AnotherBrainContent {
    ReturnsContent = 200 ,
    Invalidordisbaledsharing = 404
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

UserRouter.post("/signup" , async function(req : Request,  res:Response)
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
                console.log(e);
                res.status(SignUpStatuscodes.ServerError).json({
                    msg :"Internal Server Error !"
                });
            }
        }
        else{
            console.log("kya hua ");
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
UserRouter.post("/signin",async function(req:Request , res:Response)
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
UserRouter.get("/brain/:shareLink" , async function(req:any,res:Response)
{
    const sharelink = req.params.shareLink;
    try{
        const Check = await LinkModel.findOne({
            Hash : sharelink
        });
        
        if(Check)
        {
            try{
                const content:any = await ContentModel.findOne({
                    userId : Check.userId
                }).populate("userId" , "username");
                
                res.json({
                    username : content.username , 
                    content : content 
                });
            }
            catch(e)
            {
                res.status(500).json({
                    msg : "Internal server Error !"
                });
            }
        }
        else
        {
           res.status(404).json({
            msg : "Invalid Sharing Link !"
           });
        }  
    }
    catch(e)
    {
        res.status(500).json({
            msg : "Internal Server Error !"
        });
    }
});
UserRouter.use(usermiddleware);
UserRouter.post("/content" ,usermiddleware, async  function(req:any,res:Response)
{
    const links = req.body.links;
    const type = req.body.type;
    const title = req.body.title;
    
    try{
        await ContentModel.create({
            links : links ,     
            type : type , 
            title : title , 
            tags : [] , 
            userId : new ObjectId(req.UserId)
        });
        res.status(Contentadd.ContentAdded).json({
            msg : "Content Added successfully !"
        });
    }
    catch(e)
    {
        console.log(e);
        res.status(Contentadd.InternalServerError).json({
            msg : "Internal Server Error Occurred !"
        });
    }
});
UserRouter.get("/content" , async function(req:any , res:Response){
    const UserId = req.UserId;
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
        console.log(e);
        res.status(Contentadd.InternalServerError).json({
            msg : "Internal Server Error Occured !" 
        });
    }
});
UserRouter.delete("/content",async function(req : any , res:Response)
{
    const contentId = req.body.contentId;
    try{
        await ContentModel.deleteMany({
            _id : contentId,
            userId : req.UserId
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
UserRouter.post("/brain/share" ,async function(req:any,res:Response)
{
    const share = req.body.share;
    try
    {   
        if(share)
        {
            const Hash  = generateSmallId();
            await LinkModel.create({
                Hash : Hash ,
                userId : req.UserId
            });
            res.status(200).json({
                Link : Hash
            });
        }
        else
        {
            await LinkModel.deleteOne({
                userId : req.UserId
            });
            res.status(200).json({
                msg : "Share Link is Doisabled Successfully !"
            });
        }
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({
            msg : "Internal Server Error !"
        });
    }
});
export default UserRouter;