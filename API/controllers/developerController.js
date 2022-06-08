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
exports.register=catchAsync(async (req, res) => {
    const newDeveloper = new developer({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        authKey: CryptoJS.AES.encrypt(uuidv4(), process.env.SECRET_KEY).toString(),
    });
    try{
        const user = await newDeveloper.save();
        res.status(201).json(user);
    }
    catch (err){
        res.status(500).json({ message: err.message });
    }
})