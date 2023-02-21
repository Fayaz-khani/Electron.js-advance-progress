
const sqlite3 = require('sqlite3').verbose();
let sql;

//connect to DB

const db = new sqlite3.Database('./template.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message); 
    console.log("Connected Successfully")
})


// create table
// sql = 'CREATE TABLE templateCategory(label1 varchar(30),label2 varchar(30),label3 varchar(30),label4 varchar(30),label5 varchar(30),label6 varchar(30),label7 varchar(30),label8 varchar(30),label9 varchar(30),label10 varchar(30))'
// db.run(sql);

 // insert one row into the langs table
//  db.run(`INSERT INTO template(id,"templatename","form-name","logo","categories","labels") VALUES(?)`, [6,"Zobivone","life Balance",null,8,"Physical Health"], function(err) {
 db.run(`INSERT INTO template VALUES(?)`, [40,"Zobivone"], function(err) {
    if (err) 
      return console.log(err.message);
    
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
let array=[];
  // close the database connection
  db.close();
        connection.query($sql, function (error, results, fields) {
            if (error) throw error;
            document.write('The solution is: ', results[0].Name = array);
            console.log(array)
        });

        connection.end();