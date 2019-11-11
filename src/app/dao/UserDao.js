class UserDao{

    constructor(db){

        this._db = db;

    }

    findUser(user_name, user_password){

        return new Promise((resolve, reject) => {

            this._db.query(`SELECT FROM users WHERE user_name=${user_name} AND user_password=${user_password}`, (error, results, fields) => {

                if(error) return reject(error)

                return resolve(results);
                
            })
            

        })
    }

    add(user){

        return new Promise((resolve, reject) => {

            this._db.query('INSERT INTO users SET ? ', user, (error, results, fields)  => {
    
                if (error) return reject(error)
    
                   return resolve(results);
    
                });
            })
    


    }


}

module.exports = UserDao;