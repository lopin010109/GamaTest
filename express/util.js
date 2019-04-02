const _ = require('lodash');

function checkCarNumber(req) {
    return new Promise(function(resolve, reject) {
        if(_.isEmpty(req)) {
            reject(result);
            return;
        } else {
            resolve(req);
        };
    });
};

function checkInsertItem(req){
    return new Promise(function(resolve, reject) {
        if(_.isEmpty(req.brand) || _.isEmpty(req.number) || _.isEmpty(req.type) 
        || _.isEmpty(req.date) || _.isEmpty(req.name) || _.isEmpty(req.phone)) {
            
            return false;
        } else {
            return true;
        };
    });
};

function checkPhone(req) {
    let phone = req.phone;
    let patternPhone = new RegExp('09[0-9]{8}');
    return new Promise(function(resolve, reject) {
        if(!phone.match(patternPhone)) {
            reject(result);
            return;
        } else {
            resolve(req);
        };
    });
};

function checkDate(req) {
    let date = req.date;
    let patternDate = new RegExp('[0-9]{4}[0-9]{2}[0-9]{2}');
    let today = new Date();
    let year = today.getFullYear();
    let month = (today.getMonth() + 1); 
    let day = today.getDate();
    let month2 = month < '10' ? '0'+`${month}`:`${month}`;
    let day2 = day < '10' ? '0'+`${day}`:`${day}`;
    let todayDate = `${year}`+`${month2}`+`${day2}`;
    return new Promise(function(resolve, reject) {
        if(!date.match(patternDate) || date > todayDate) {
            reject(result);
            return;
        } else {
            resolve(req);
        }; 
    }); 
};


module.exports = {
    checkCarNumber,
    checkInsertItem,
    checkPhone,
    checkDate
};