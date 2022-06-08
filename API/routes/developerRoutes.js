const router = require("express").Router();
const developerController=require("./../controllers/developerController");
const CryptoJS =require("crypto-js");
const developer = require("../models/developerModel");
const { v4: uuidv4 } = require('uuid');

//router.route('/:key').get(developerController.isValid);

router.post("/register", developerController.register);

module.exports=router;