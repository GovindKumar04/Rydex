const dotenv = require('dotenv');
dotenv.config();
const DbConnection = require('./config/db')
const express = require('express');
const cors = require('cors');
const cookie= require("cookie-parser")
const userRoutes= require('./routes/user.routes')
const captainRoutes= require("./routes/captain.routes")
const app = express();


DbConnection()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use("/users", userRoutes)
app.use("/captains", captainRoutes)

module.exports = app;