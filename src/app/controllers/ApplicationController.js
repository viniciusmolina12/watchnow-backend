

class ApplicationController {

    login(){

        return (req, resp, next) => {
            
            const passport = req.passport;
            passport.authenticate('local', (error, user, info) => {
                
                if(info) { 
                    //Retorna para a pagina de login
                }

                if(error){
                    
                    return next(error)
                }

                req.login(user, (error) => {
                    
                    if(error) { 
                        return next(error)
                    }
                    
                    return true

                })

            })(req, resp, next);

        }
    }

}

module.exports = ApplicationController