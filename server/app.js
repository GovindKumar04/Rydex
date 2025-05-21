const dotenv = require('dotenv');
dotenv.config();
const DbConnection = require('./config/db')
const express = require('express');
const cors = require('cors');
const cookie= require("cookie-parser")
const router= require('./routes/user.routes')
const app = express();


DbConnection()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use("/user", router)

module.exports = app;