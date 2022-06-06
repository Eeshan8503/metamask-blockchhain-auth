const express=require("express");
const Developer=require("./../models/developerModel")
const {catchAsync}=require("./../Util/catchAsync");

exports.isValid=catchAsync(async(req,res)=>{
    const user=await Developer.find({authkey:req.params.key});
    if(user){
        return true;
    }
    else{
        return false;
    }
})