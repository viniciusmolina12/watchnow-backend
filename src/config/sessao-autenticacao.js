const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../config/data-base');
const UserDao = require('../app/dao/UserDao');

module.exports = (app) => {

    //Autenticacao
    passport.use(new LocalStrategy(
        {
            usernameField: 'user_login',
            passwordField: 'user_password'
        },
        (user_login, user_password, done) => {

            const UserDao = new UserDao(db);
            UserDao.find(user_login, user_password)
            .then(user => {
                console.log(user);
                if(!user || user_password != user.user_password){
                    return done(null, false, {
                        message: 'Login e/ou senha incorretos!'
                    })
                }

                return done(null, user);

            })
            .catch(error => {

                done(error, false)

            })

        }
    ));

    //Serializando
    passport.serializeUser((user, done) => {
        const userSession = {
            user_name: user.user_name,
            user_email: user.user_email
        }

        done(null, userSession);

    });

    //Deserializando
    passport.deserializeUser((userSession, done) => {

        done(null, userSession);

    })

    //Middleware
    app.use(sessao({

        secret: 'watchnow',
        genid: (req) => {

            return uuid();

        },
        resave: false,
        saveUninitialized: false


    }))

    //Iniciando
    app.use(passport.initialize());
    app.use(passport.session());
    app.use((req, res, next) => {

        req.passport = passport;
        next();

    })
}