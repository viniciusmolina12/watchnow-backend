const MovieDao = require('../dao/MovieDao');
const db = require('../../config/data-base');
class MovieController{

    list(){
        return function(req, res){
            const movieDao = new MovieDao(db);
            
                movieDao.list()
                .then(response => {
    
                    res.send(response);
                
    
                })
                .catch(error => {
                    console.log(error)
                }) 
       
        }
    }
}
module.exports = MovieController;