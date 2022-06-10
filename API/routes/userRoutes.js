const express=require('express');
const userController=require("./../controllers/userController");
const router=express.Router();

router
    .route('/:user')
    .get(userController.getUser)

router
    .route('/newUser')
    .post(userController.newUser)
module.exports = router;