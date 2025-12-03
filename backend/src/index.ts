import express from "express" ; 
import mongoose from "mongoose";
import UserRouter from "./Router/user";
import cors from "cors"
import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, "../.env")
});
const App = express();
App.use(express.json());
App.use(cors());
main();
async function main()
{
    try{
        await mongoose.connect(process.env.DB_URL as string);
        console.log("Connection Successfull !");
        App.listen(process.env.PORT_NO);
    }
    catch(e)
    {   
        console.log("Connection Unsuccessfull !");
    }
}
App.use("/api/v1/" , UserRouter);
