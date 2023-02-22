const sqlite3 = require('better-sqlite3-with-prebuilds');

const db = new sqlite3("../template.db")

exports.db = db;

// const db = new sqlite3.Database('./template.db',sqlite3.OPEN_READWRITE,(err)=>{
//     if (err) return console.error(err.message); 
//     console.log("Connected Successfully")
// })


// db.run(`INSERT INTO template VALUES(?)`, [40,"Zobivone"], function(err) {
//     if (err) 
//       return console.log(err.message);
    
//     // get the last insert id
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
//   });