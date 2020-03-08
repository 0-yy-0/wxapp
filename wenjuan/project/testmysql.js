var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456qwe',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (err, results, fields) {
	if (err) {
		throw  err;
	};
  console.log('The solution is: ', results[0].solution);
});