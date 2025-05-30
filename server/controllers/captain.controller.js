const captainService = require('../services/captain.service');
const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');

const registerCaptain = async (req, res, next) => {
    const errror= validationResult(req);
    if(!errror.isEmpty()) {
        return res.status(400).json({errors: errror.array()});
    }
    try {
        const { fullname, email, password, vechile} = req.body;
        const isCaptainExists = await captainModel.findOne({ email });
        if (isCaptainExists) {
            return res.status(400).json({ error: 'Captain with this email already exists' });
        }
        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vechile.color,
            plate: vechile.plate,
            capacity: vechile.capacity,
            vechileType: vechile.vechileType
        });

        const token = await captain.generateAuthToken();

        return res.status(201).json({ token, captain });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    
};

module.exports = {
    registerCaptain
};