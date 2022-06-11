// const express=require("express");
// const Developer=require("./../models/developerModel")
const developer=require("./../models/developerModel")
const {catchAsync}=require("./../Util/catchAsync");
const CryptoJS =require("crypto-js");
const { v4: uuidv4 } = require('uuid');
exports.isValid=catchAsync(async(req,res,next)=>{
    console.log("in isvalid function")
    const d=await developer.find({"authKey":req.params.key});
    console.log(d)
    // const doc=await d;
    if(d){
        console.log("here")
        next();
    }
    else{
        return next("Invalid Auth key",401)
    }
})
exports.register=catchAsync(async (req, res) => {
    const newDeveloper = new developer({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        authKey: uuidv4()
    });
    try{
        const user = await newDeveloper.save();
        res.status(201).json(user);
    }
    catch (err){
        res.status(500).json({ message: err.message });
    }
})