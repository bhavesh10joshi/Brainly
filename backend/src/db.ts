import mongoose from "mongoose";
import { Schema , model } from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const contentTypes = ['Image' , 'Video' , 'Article' , 'Audio']

const Users = new Schema({
    username : {type : String , required : true , unique : true},
    password : {type : String , required : true , unique : true},
});
const Content = new Schema({
    links : {type : String , required : true} ,
    type  : {type : String , enum : contentTypes , required: true},
    title : {type : String , required : true } , 
    tags : [{type : ObjectId , ref : 'Tag' }] , 
    userId : { type:ObjectId , ref:'User' , required:true}
});
const Links = new Schema({
    Hash : {type : String} , 
    userId : {type : ObjectId , ref : 'User' , required : true}
});

export const UserModel = model("User" , Users);
export const ContentModel = model("Content" , Content);
export  const LinkModel = model("Links" , Links);

