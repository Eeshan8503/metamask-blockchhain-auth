const router = require("express").Router();
const developerController=require("./../controllers/developerController");
const CryptoJS =require("crypto-js");
const developer = require("../models/developerModel");
const { v4: uuidv4 } = require('uuid');

//router.route('/:key').get(developerController.isValid);

router.post("/register", async (req, res) => {
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
});

module.exports=router;