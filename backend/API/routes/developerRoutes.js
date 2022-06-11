const router = require("express").Router();
const developerController=require("./../controllers/developerController");

const developer = require("../models/developerModel");


//router.route('/:key').get(developerController.isValid);

router.post("/register", developerController.register);

module.exports=router;