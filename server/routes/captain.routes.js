const express= require('express');
const router= express.Router();
const {body} = require("express-validator");
const {registerCaptain}=require("../controllers/captain.controller");

router.post('/register', [
    body('email').isEmail().withMessage("Please enter a valid email"),
    body("fullname.firstname").isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage("Password can be at least 6 characters long"),
    body("vechile.color").isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body("vechile.plate").isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),
    body("vechile.capacity").isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body("vechile.vechileType").isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be either car, motorcycle, or auto')     
], registerCaptain);

module.exports= router;