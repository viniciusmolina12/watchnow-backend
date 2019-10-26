const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'mysql669.umbler.com',
    user: 'watch-ung',
    password: 'watchnowung2019',
    database: 'watchnow',
    port: '41890'
});

module.exports = connection;