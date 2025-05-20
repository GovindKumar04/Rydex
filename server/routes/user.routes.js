const express= require('express');
const router= express.Router();
const {registerUser, login} = require("../controllers/user.controller")
const {body}= require("express-validator")

router.post('/register',[
    body('email').isEmail().withMessage("Please enter a valid email"),
    body("fullname.firstname").isLength({min: 3}).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({min: 6}).withMessage("Password can be atleast 6 characters long")
],registerUser)

router.post('/login', [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body('password').isLength({min: 6}).withMessage("Password can be atleast 6 characters long")
],login)


module.exports= router;