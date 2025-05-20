const usermodel = require('../models/user.model');

const createUser = async ({firstname, lastname, email, password})=> {
    if(!firstname || !email || !password) throw new Error("All fileds are required");

    const user = await usermodel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })
    return user;
}

module.exports={createUser}