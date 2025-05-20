const userModel = require('../models/user.model')
const userService = require('../services/user.services');
const {validationResult} = require("express-validator");

const registerUser = async (req,res,next) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password} = req.body;
    const hashedPassoword= await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password:hashedPassoword
    })

    const token = user.genrateAuthToken();
    res.status(201).json({token, user})

}
const login = (req,res,next) => {

}

module.exports = {registerUser, login}