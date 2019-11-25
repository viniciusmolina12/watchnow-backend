
const UserDao = require('../dao/UserDao');
const db = require('../../config/data-base');
const { check, validationResult } = require('express-validator');
class UserController{

    register(){
            return function(req, res) {
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(422).json({errors: errors.array()})
                }   
        
                const userDao = new UserDao(db);
                userDao.add(req.body)
                .then(response => {
                    res.send(response)
                })
                .catch(error => {
                    console.log(error);
                });
                
        }

    }
}

module.exports = UserController;