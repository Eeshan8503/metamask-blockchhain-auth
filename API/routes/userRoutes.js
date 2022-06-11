const express=require('express');
const {isValid}=require('./../controllers/developerController')
const userController=require("./../controllers/userController");
const router=express.Router();

router
    // .route()
    .get('/:key/:user',isValid,userController.getUser)

router
    .route('/newUser')
    .post(userController.newUser)
module.exports = router;