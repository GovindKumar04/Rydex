const dotenv = require('dotenv');
dotenv.config();
const DbConnection = require('./config/db')
const express = require('express');
const cors = require('cors');
const app = express();
const router= require('./routes/user.routes')

DbConnection()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user", router)

app.get('/', (req,res) => {
    res.send("hello")
})
module.exports = app;