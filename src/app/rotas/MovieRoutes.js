const MovieController = require('../controllers/MovieController');
const movieController = new MovieController;

module.exports = (app) => {

    
    app.get(
        '/api/filmes',
         movieController.list()
        );



}

