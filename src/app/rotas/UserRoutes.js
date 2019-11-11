
const User = require('../models/User');
const user = new User;
const { check, validationResult } = require('express-validator');
const UserController = require('../controllers/UserController');
const userController = new UserController;

module.exports = (app) => {

    
    app.post(
        '/api/user/add', 
        [
            check('user_email').isEmail().withMessage('Email inválido'),
            check('user_password').isLength({min: 6}).withMessage('A senha precisa ter no mínimo 8 caracteres'),
            check('user_login').isLength({min: 6}).withMessage('O Login precisa ter no mínimo 6 caracteres')
        ], 
        userController.register()
     );

}

