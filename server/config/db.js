const mongoose = require('mongoose')
const uri = process.env.MONGO_URL

function connnection(){
    mongoose.connect(uri)
    .then(()=>{
        console.log("connected")
    })
    .catch((e)=>{
        console.log(e)
    })

    
}

module.exports = connnection