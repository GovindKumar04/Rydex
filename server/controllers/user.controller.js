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
const login = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({msg: "Invalid email or password"});
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if(!isPasswordCorrect){
        return res.status(401).json({msg: "Invalid email or password"});
    }

    const token = user.genrateAuthToken();
    res.status(200).json({token,user});
}

module.exports = {registerUser, login}