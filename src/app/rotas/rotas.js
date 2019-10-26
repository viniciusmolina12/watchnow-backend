const MovieDao = require('../dao/MovieDao');
const db = require('../../config/data-base');
module.exports = (app) => {

    app.get('/', function(req, res){

        res.send('<h1>Ola Home</h1>');
    
    });
    
    
    app.get('/api/filmes', function(req, res){
        const movieDao = new MovieDao(db);
        
            movieDao.list()
            .then(response => {

                res.send(response);
            

            })
            .catch(error => {
                console.log(error)
            }) 
            
        
     
            
     
       
       
    
    
    });

}

