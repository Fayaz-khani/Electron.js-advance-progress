document.write('The solution is: ');
    document.write(array);
    var array = [];
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'me',
            password: null,
            database: 'chart-db'
        });
        var sql = 'SELECT `name`,`id` FROM `data`';
        console.log("massege is displayed")
        connection.connect();

        connection.query($sql, function (error, results, fields) {
            if (error) throw error;
            document.write('The solution is: ', results[0].Name = array);
        });

        connection.end();