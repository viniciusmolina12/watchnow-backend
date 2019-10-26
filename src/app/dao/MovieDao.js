class MovieDao {

    constructor(db){
        this._db = db;
        this._data = [];
    }

    list(){
        return new Promise((resolve, reject) => {

        this._db.query('SELECT * FROM movies', (error, results, fields)  => {

            if (error) return reject('Nao foi possivel listar os filmes')

               return resolve(results);

            });
        })

        
      

           

    }

    
}

module.exports = MovieDao;