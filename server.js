const http = require('http');
const app = require('./src/config/custom-express');
const hostName = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});



// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'mysql669.umbler.com',
//     user: 'watch-ung',
//     password: 'watchnowung2019',
//     database: 'watchnow',
//     port: '41890'
// });

// connection.query('SELECT * FROM users', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0]);
//   });

