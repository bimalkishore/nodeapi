const express = require('express');
const {registerUser,loginUser,getUsers } = require('../controlles/authcontroller');
const { userRegisterValidate, userLoginValidate} = require('../middlewear/userValidation');
const { ensureAuthenticated } = require('../middlewear/userauth');
const authroutes = express.Router();

authroutes.post('/registration',userRegisterValidate, registerUser);
authroutes.post('/login', userLoginValidate, loginUser);

authroutes.get('/users', ensureAuthenticated, getUsers);

module.exports = authroutes;
/*


*/