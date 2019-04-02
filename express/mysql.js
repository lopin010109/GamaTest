// // mysql import
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 5,

    host: "127.0.0.1",
    user: "root",
    password: "root1234",
    database: "GamaDBTest"
});

function query(sql) {
    return new Promise(function(resolve, reject) {
        pool.query(sql, function(err, results, fields) {
            if(err) {
                reject(err);
                return;
            };
            resolve(results);
        });
    });
}; 

module.exports = {
    query
 };

// function getAll(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query('select * from Car', function(err, results, fields) {
//             if(err) {
//                 console.error(err);
//                 reject(err);
//                 return;
//             };
//             let string = JSON.stringify(results);
//             console.log(string);
//             resolve(string);
//         });
//     });
// };

// function getSelect(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query(`select id, Brand, Number, Type, Date, Name, Phone from Car where Number = ${req};`, function(err, results, fields) {
//             if(err) {
//                 console.error(err);
//                 reject(err);
//                 return;
//             };
//             let string = JSON.stringify(results);
//             console.log(string);
//             resolve(string);
//         });  
//     });  
// };

// function insert(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query(`insert into Car (Brand, Number, Type, Date, Name, Phone) values ("${req.brand}", ${req.number}, "${req.type}", ${req.date}, "${req.name}", ${req.phone});`, function(err, results, fields) {
//             if(err) {
//                 console.error(err);
//                 reject(err);
//                 return;
//             };
//             let string = JSON.stringify(results);
//             console.log(string);
//             resolve(string);
//         });
//     });
// };

// function del(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query(`delete from Car where Number = ${req}`, function(err, results, fields) {
//             if(err) {
//                 console.error(err);
//                 reject(err);
//                 return;
//             };
//             let string = JSON.stringify(results);
//             console.log(string);
//             resolve(string);
//         });
//     });
// };

// function update(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query(`update Car set ${req.updateItem} = "${req.newData}" where Number = ${req.number}`, function(err, results, fields){
//             if(err) {
//                 console.error(err);
//                 reject(err);
//                 return;
//             };
//             let string = JSON.stringify(results);
//             console.log(string);
//             resolve(string);
//         }); 
//     });
// };





// 使用 pool.query
// callback
// function getAll(req, callbcak) {
//     pool.query('select * from Car', function(err, results, fields) {
//         if(err){
//             console.error(err);
//             return;
//         };        
//         console.log(results);
//         let string = JSON.stringify(results)
//         console.log(string);
//         callbcak(string);

//     });
// };

// function getSelect(req, callbcak) {
//     pool.query(`select id, Brand, Number, Type, Date, Name, Phone from Car where Number = ${req};`, function(err, results, fields) {
//         if(err) {
//             console.error(err);
//             return;
//         };
//         console.log(results);
//         let string = JSON.stringify(results);
//         console.log(string);
//         callbcak(string);

//     });  
// };

// function insert(req, callbcak) {
//     pool.query(`insert into Car (Brand, Number, Type, Date, Name, Phone) values ("${req.brand}", ${req.number}, "${req.type}", ${req.date}, "${req.name}", ${req.phone});`, function(err, results, fields) {
//         if(err) {
//             console.error(err);
//             return;
//         };
//         let string = JSON.stringify(results);
//         console.log(string);
//         callbcak(string);
//     });
// };

// function del(req, callbcak) {
//     pool.query(`delete from Car where Number = ${req}`, function(err, results, fields) {
//         if(err) {
//             console.error(err);
//             return;
//         };
//         let string = JSON.stringify(results);
//         console.log(string);
//         callbcak(string);
//     });
// };

// function update(req, callbcak) {
//     console.log(req);
//     pool.query(`update Car set ${req.updateItem} = "${req.newData}" where Number = ${req.number}`, function(err, results, fields){
//         if(err) {
//             console.error(err);
//             return;
//         };
//         let string = JSON.stringify(results);
//         console.log(string);
//         callbcak(string);
//     }); 
    
// };






// 使用 pool.getConnection

// function getAll(req, callbcak) {
//     pool.getConnection(function(err, connection) {
//         if(err) {
//             console.error(`Debug getAll 1 >>> ${err}`);
//             return;
//         };
//         connection.query('select * from Car', function(err, results, fields) {
//             if(err) {
//                 console.error(`Debug getAll 2 >>> ${err}`);
//                 return;
//             };

//             let string = JSON.stringify(results);
//             // let data = JSON.parse(results);
//             console.log(string);

//             callbcak(string);
            
//             connection.release();
        
//         });
//     });

// };

// function getSelect(req, callbcak) {
//     pool.getConnection(function(err, connection) {
//         if(err) {
//             console.error(`Debug getSelect 1 >>> ${err}`);
//             return;
//         };
//         connection.query(`select id, Brand, Number, Type, Date, Name, Phone from Car where Number = ${req};`, 
//         function(err, results, fields) {
//             if(err) {
//                 console.error(`Debug getSelect 2 >>> ${err}`)
//             };
//         console.log(results);
//         let string = JSON.stringify(results);
//         console.log(string);
//         callbcak(string);
//         connection.release();
//         });
        
//     });
// };















