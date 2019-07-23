const express = require('express');
const router = express.Router();
const {getAll, getSelect, insert, del, update} = require('../fp');


//async/await
//getall
router.get('/getall', async function(req, res) {
    console.log('getAll');
    const data = await getAll(req);
    res.send(data);
    
});

//getselect 
router.post('/getselect', async function(req, res) {
    console.log('getSelect');
    const data = await getSelect(req.body.number);
    res.send(data);
});

// insert 
router.post('/insert', async function(req, res) {
    console.log('insert');
    const data = await insert(req.body);
    res.send(data);     
});

// delete 
router.post('/del', async function(req, res) { 
    console.log('del')
    const data = await del(req.body.number);
    res.send(data);
});

// update 
router.post('/update', async function(req, res) {
    console.log(`修改 ${req.body.number} 的 ${req.body.updateItem} 資料：為 ${req.body.newData}`);
    const data = await update(req.body);       
    res.send(data);
});


module.exports = router;


/* ----- callback ----- */

// getall
// router.get('/getall', function(req, res) {
//     console.log(`查詢全部資料`);
//     mysql.getAll(req, function(data) { 
//         res.send(data);
//     });
//     // 轉址
//     //res.redirect('/');
// });


// // getselect 
// router.post('/getselect', function(req, res) {
//     console.log(`單筆查詢輸入資料： ${req.body.number}`);
//     mysql.getSelect(req.body.number, function(data) {
//         res.send(data);
//     });
//     // 轉址
//     //res.redirect('/');
// });

// // insert 
// router.post('/insert', function(req, res) {
//     console.log(req.body);

//     mysql.insert(req.body, function(data) {
//         res.send(data);
//     });
// });

// // delete 
// router.post('/del', function(req, res) {
//     console.log(`刪除單筆資料：${req.body.number}`);
//     mysql.del(req.body.number, function(data) {
//         res.send(data);
//     });
// });

// // update 
// router.post('/update', function(req, res) {
//     console.log(`修改 ${req.body.number} 的 ${req.body.updateItem} 資料：為 ${req.body.newData}`);
//     mysql.update(req.body, function(data) {
//         res.send(data);
//     });
// });

// // AJAX
// router.post('/getselectAJAX', function(req, res) {
//     res.send('hello!!');
// });



// // Promise
// // getall
// router.get('/getall', function(req, res) {
//     console.log(`查詢全部資料`);
//     mysql.getAll(req)
//     .then(resolve => res.send(resolve))
//     .catch(err => console.log(err));
// });

// // getselect 
// router.post('/getselect', function(req, res) {
//     console.log(`單筆查詢輸入資料： ${req.body.number}`);
//     mysql.getSelect(req.body.number)
//     .then(resolve => res.send(resolve))
//     .catch(err => console.log(err));
// });

// // insert 
// router.post('/insert', function(req, res) {
//     console.log(req.body);
//     mysql.insert(req.body)
//     .then(resolve => res.send(resolve))
//     .catch(err => console.log(err));
// });

// // delete 
// router.post('/del', function(req, res) {
//     console.log(`刪除單筆資料：${req.body.number}`);
//     mysql.del(req.body.number)
//     .then(resolve => res.send(resolve))
//     .catch(err => console.log(err));
// });

// // update 
// router.post('/update', function(req, res) {
//     console.log(`修改 ${req.body.number} 的 ${req.body.updateItem} 資料：為 ${req.body.newData}`);
//     mysql.update(req.body)
//     .then(resolve => res.send(resolve))
//     .catch(err => console.log(err));
// });

// // AJAX
// router.post('/getselectAJAX', function(req, res) {
//     res.send('hello!!');
// });




