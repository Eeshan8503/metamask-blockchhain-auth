const express=require('express');
const userController=require("./../controllers/userController");
const router=express.Router();

router
    .route('/user/:account')
    .get(userController.sendUser)

module.exports = router;