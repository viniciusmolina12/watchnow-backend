class SectionDao {

    constructor(db){
        this._db = db;
        this._data = [];
    }

    list(filter = ''){
        
        return new Promise((resolve, reject) => {
        const query = `SELECT * FROM sections ${filter != '' ? 'where ' + filter : ''}` ; 
        
        this._db.query(query, (error, results, fields)  => {
            
            if (error) return reject(error)

               return resolve(results);

            });
        })

    }



    
}

module.exports = SectionDao;