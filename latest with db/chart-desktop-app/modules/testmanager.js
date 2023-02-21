var dbmaagr = require('../modules/dbmanager');
var db = dbmaagr.db;


exports.getNames = ()=>{
    const sql = "SELECT * FROM newTemplate";
    let stmt = db.prepare(sql);
    let res = stmt.all();
    return res;
};


