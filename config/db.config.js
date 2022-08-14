var mysql = require('mysql2');

// creating mysql connection

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bachi@9415',
    database: 'expense_tracker'
  });

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected...')
});

const tableName = 'categories'
db.query(`SELECT * FROM ${tableName} RIGHT JOIN amount ON categories.id=amount.category_id;`,(a,b) =>{
    if (a) throw a
     console.log(b)
 })


module.exports = db;