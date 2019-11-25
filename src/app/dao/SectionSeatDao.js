class SectionSeatDao {

    constructor(db){
        this._db = db;
        this._data = [];
    }

    list(filter = '', groupBy = ''){
        
        return new Promise((resolve, reject) => {
        const query = `SELECT * FROM sections_seats ${filter != '' ? 'where ' + filter : ''} ${groupBy != '' ? ' group by ' + filter : ''}` ; 
        
        this._db.query(query, (error, results, fields)  => {
            
            if (error) return reject(error)

               return resolve(results);

            });
        })

    }



    
}

module.exports = SectionSeatDao;