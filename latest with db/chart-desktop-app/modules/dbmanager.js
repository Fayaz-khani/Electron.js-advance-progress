
const { app, BrowserWindow } = require('electron');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE users (id INT, name TEXT)');
  db.run('INSERT INTO users (id, name) VALUES (?, ?)', [1, 'John Doe']);
  db.run('INSERT INTO users (id, name) VALUES (?, ?)', [2, 'Jane Smith']);

  db.each('SELECT * FROM users', (err, row) => {
    console.log(row.id, row.name);
  });
});

db.close();







// var sqlite = require("better-sqlite3-with-prebuilds");
// var db = new sqlite("../newTemplate.db");
// exports.db = db;


// const mysql = require('better-sqlite3-with-prebuilds');

// // Initialize connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mydatabase'
// });

// // Connect to the database
// connection.connect();

// // Query the database table
// connection.query('SELECT * FROM mytable', (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });

// // Close the connection
// connection.end();
 
// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }

//   stmt.finalize();

//   var rows = document.getElementById("database");
//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//     var item = document.createElement("li");
//     item.textContent = "" + row.id + ": " + row.info;
//     rows.appendChild(item);
//   });
// });

// db.close();