// // mysql import
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 5,

    host: "192.168.122.174",
    user: "root",
    password: "gama.net",
    database: "JoshhsiehTest"
});

// Promise & async/await

function query(sql) {
    return new Promise(function(resolve, reject) {
        pool.query(sql, function(err, results, fields) {
            if(err) {
                console.log(err);
                reject(err);
                return;
            };
            //let string = JSON.stringify(results); 
            console.log(results);
            resolve(results);
        });
    });
};


module.exports = {
    query 
};






















// function query(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query(sql, function(err, results, fields) {
//             if(err) {
//                 console.log(err);
//                 results.status = "查詢失敗！伺服器錯誤，請稍後再試！";
//                 reject(results);
//                 return;
//             };
//             // 查詢是否有無車號
//             if(results.length >= 1) {
//                 pool.query(`select id, Brand, Number, Type, Date, Name, Phone from Car where Number = "${req}";`, function(err, results, fields) {
//                     if(err) {
//                         console.log(err);
//                         results.status = "查詢失敗！伺服器錯誤，請稍後再試！";
//                         reject(results);
//                         return;
//                     };
//                     let string = JSON.stringify(results);
//                     console.log(string);
//                     resolve(string);
//                 });  
//             } else {
//                 results.status = `查詢失敗！查無此車號 "${req}"！`;
//                 reject(results);
//             }
//         });
//     });  
// };

// function insert(sql) {
//     return new Promise(function(resolve, reject) {
//         // 尋找是否有重複車號
//         pool.query(`select Number from Car where Number = "${req.number}"`, function(err, results, fields) {
//             if(err) {
//                 console.log(err);
//                 results.status = "新增失敗！伺服器錯誤，請稍後再試！";
//                 reject(results);
//                 return;
//             };
//             // 判定是否有重複車號
//             if(results.length >= 1) {
//                 results.status = `新增失敗！已有重複車號 "${req.number}"！`;
//                 reject(results);
//             } else {
//                 // 新增資料
//                 pool.query(`insert into Car (Brand, Number, Type, Date, Name, Phone) values 
//                 ("${req.brand}", "${req.number}", "${req.type}", ${req.date}, "${req.name}", "${req.phone}");`, 
//                 function(err, results, fields) {
//                     if(err) {
//                         console.log(err);
//                         results.status = "新增失敗！伺服器錯誤，請稍後再試！";
//                         reject(results);
//                         return;
//                     };
//                     let string = JSON.stringify(results);
//                     console.log(string);
//                     resolve(string);
//                 });
//             }
//         });
//     });
// };

// function del(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query(`select Number from Car where Number = "${req}"`, function(err, results, fields) {
//             if(err) {
//                 console.log(err);
//                 results.status = "刪除失敗！伺服器錯誤，請稍後再試！";
//                 reject(results);
//                 return;
//             };
//             // 驗證是否有車牌號碼
//             if (results.length >= 1) {
//                 pool.query(`delete from Car where Number = "${req}"`, function(err, results, fields) {
//                     if(err) {
//                         console.log(err);
//                         results.status = "刪除失敗！伺服器錯誤，請稍後再試！";
//                         reject(results);
//                         return;
//                     };
//                     let string = JSON.stringify(results);
//                     console.log(string);
//                     resolve(string);
//                 });
//             } else {
//                 results.status = `刪除失敗！查無此車號 "${req}"！`;
//                 reject(results);
//             }
//         });  
//     });
// };

// function update(req) {
//     return new Promise(function(resolve, reject) {
//         pool.query(`select Number from Car where Number = "${req.number}"`, function(err, results, fields) {
//             if(err) {
//                 console.log(err);
//                 results.status = "修改失敗！伺服器錯誤，請稍後再試！";
//                 reject(results);
//                 return;
//             };
//             // 驗證是否有車牌號碼
//             if(results.length >=1 ) {
//                 pool.query(`update Car set ${req.updateItem} = "${req.newData}" where Number = "${req.number}"`, function(err, results, fields){
//                     if(err) {
//                         console.log(err);
//                         results.status = "修改失敗！伺服器錯誤，請稍後再試！";
//                         reject(results);
//                         return;
//                     };
//                     let string = JSON.stringify(results);
//                     console.log(string);
//                     resolve(string);
//                 }); 
//             } else {
//                 results.status = `修改失敗！查無此車號 "${req.number}"！`;
//                 reject(results);
//             }
//         });
//     });
// };


// 使用 pool.query

//callback
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















