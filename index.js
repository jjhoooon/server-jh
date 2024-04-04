const express = require('express')
const app = express();
const router = express.Router();
const createtoken = require('./createtoken.js');
const jwt = require('jsonwebtoken');
const web = require('./web/web')
const verify = require('./verify')

app.use('/', web);
app.use('/', createtoken);
app.use('/verify', verify)


app.listen(process.env.PORT, () => {
    console.log(`server is running to ${process.env.PORT}`);
})