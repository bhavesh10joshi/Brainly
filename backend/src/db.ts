import mongoose from "mongoose";
import { Schema , model } from "mongoose";
import express from "express";
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
const Link = new Schema({
    _id : {type : ObjectId} , 
    title : {type : String} , 
    userId : {type : ObjectId , ref : 'User' , required : true}
});

export const UserModel = model("Users" , Users);
export const ContentModel = model("Content" , Content);
export  const LinkModel = model("Links" , Link);

