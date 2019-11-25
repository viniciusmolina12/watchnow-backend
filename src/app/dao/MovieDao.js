class MovieDao {

    constructor(db){
        this._db = db;
        this._data = [];
    }

    list(){
    
        return new Promise((resolve, reject) => {

        this._db.query('SELECT * FROM movies', (error, results, fields)  => {

            if (error) return reject(error)

               return resolve(results);

            });
        })

        
      

           

    }

    listOne(movieId){

        return new Promise((resolve, reject) => {

            this._db.query(`SELECT * FROM movies where movie_id = ${movieId}`, (error, results, fields)  => {
    
                if (error) return reject(error)
    
                   return resolve(results);
    
                });
            })

    }

    
}

module.exports = MovieDao;