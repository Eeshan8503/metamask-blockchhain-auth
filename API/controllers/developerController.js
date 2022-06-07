// const express=require("express");
const Developer=require("./../models/developerModel")
const {catchAsync}=require("./../Util/catchAsync");

exports.isValid=catchAsync(async(req,res)=>{
    const developer=await Developer.find({authkey:req.params.key});
    if(developer){
        return true; 
    }
    else{
        return false;
    }
})