const express=require("express");
const developerController=require("./../controllers/developerController");
const router=express.Router();

router.route('/:key').get(developerController.isValid);
module.exports=router;