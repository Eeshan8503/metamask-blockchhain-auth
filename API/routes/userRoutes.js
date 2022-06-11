const express=require('express');
const {isValid}=require('./../controllers/developerController')
const userController=require("./../controllers/userController");
const router=express.Router();

router
    .route('/:key/:user')
    .get(isValid,userController.getUser)

router
    .route('/newUser')
    .post(userController.newUser)
module.exports = router;