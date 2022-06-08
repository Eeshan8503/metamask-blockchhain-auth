const express=require('express');
const userController=require("./../controllers/userController");
const router=express.Router();

router
    .route('/user/:key/:account')
    .get(userController.getUser)

router
    .route('/user/newUser')
    .get(userController.addUser)
module.exports = router;