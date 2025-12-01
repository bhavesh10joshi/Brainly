import express from "express" ; 
import mongoose from "mongoose";
import UserRouter from "./Router/user";
import cors from "cors"
import { Port_no } from "./Config";
import { mongoose_url } from "./Config";
const App = express();
App.use(express.json());
App.use(cors());
main();
async function main()
{
    try{
        await mongoose.connect(mongoose_url);
        console.log("Connection Successfull !");
        App.listen(Port_no);
    }
    catch(e)
    {   
        console.log("Connection Unsuccessfull !");
    }
}
App.use("/api/v1/" , UserRouter);
