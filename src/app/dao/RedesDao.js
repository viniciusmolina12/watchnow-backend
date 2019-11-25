class RedesDao {

    constructor(db){
        this._db = db;
        
    }


    listRedes(){

        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM rede ` ; 
            
            this._db.query(query, (error, results, fields)  => {
                
                if (error) return reject(error)
    
                   return resolve(results);
    
                });
            })

    }

    listRedePlace(filter = ''){

        return new Promise((resolve, reject) => {

            const query = `SELECT * FROM rede_places ${filter != '' ? 'where ' + filter : ''}` ; 
            
            this._db.query(query, (error, results, fields)  => {
                
                if (error) return reject(error)
    
                   return resolve(results);
    
                });
            })
    }

    
}

module.exports = RedesDao;