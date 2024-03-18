const express = require('express');
const Mongoose = require('mongoose');
const route = express.Router();


const userScheme = Mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    mobile: Number,
    gender: String,
    password: String
})

const User = Mongoose.model('User', userScheme, 'User');

route.post('/register', (req, res) => {
    const userData = req.body;
    const userReqObject = {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        mobile: userData.mobile,
        gender: userData.gender,
        password: userData.password
    }

    console.log(userReqObject);
    const userReq = new User(userReqObject);
    userReq.save().then(data => {
        console.log("in response:", data);
        const responseObj = {
            is_user_added: data._id ? true : false
        }
        res.json(responseObj);
    }
    ).catch(error => {
        const responseObj = {
            is_user_added: false
        }
        res.json(responseObj);
    })
})


module.exports = route;