const captainModel= require('../models/captain.model');
const bcrypt = require('bcrypt');

const createCaptain = async ({
    firstname,
    lastname, email, password, color, plate, capacity, vechileType
}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vechileType) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: await bcrypt.hash(password, 10),
        vechile: {
            color,
            plate,
            capacity,
            vechileType
        }
    }); 
    return captain;
}

module.exports = {
    createCaptain
};