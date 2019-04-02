const {query} = require('./mysql');
const _ = require('lodash');


const getAll = async function(req) {
    const result = await query('select * from Car');
    if(result.length >= 1) {
        return result;
    } else {
        return '查無資料！';
    };
};

const getNumber = async function(req) {
    let number = req;
    const result = await query(`select Number from Car where Number = "${number}"`);
    if(_.isEmpty(result)) {
        return false;
    } else {
        return true;
    };
};

const getSelect = async function(req) {
    let number = req;
    let getNum = await getNumber(number);
    if(getNum) {
        const result = await query(`select id, Brand, Number, Type, Date, Name, Phone from Car where Number = ${number};`);
        return result;
    } else {
        return '查無此車號！';
    };
};

const insert = async function(req) {
    let patternPhone = new RegExp('09[0-9]{8}');
    let patternDate = new RegExp('[0-9]{4}[0-9]{2}[0-9]{2}');
    let getNum = await getNumber(req.number);
    if(getNum) {
        return '此車號已經存在！';
    } else if(_.isEmpty(req.brand) || _.isEmpty(req.number) || _.isEmpty(req.type) 
    || _.isEmpty(req.date) || _.isEmpty(req.name) || _.isEmpty(req.phone)) {
        return '填上缺少資料！';   
    } else if(!req.phone.match(patternPhone) || req.phone.length < 10) {
        return '電話格式不符合！';
    } else if(!req.date.match(patternDate) || req.date.length < 8) {
        return '日期格式不符合！';
    } else {
        const result = await query(`insert into Car (Brand, Number, Type, Date, Name, Phone) 
        values ("${req.brand}", ${req.number}, "${req.type}", ${req.date}, "${req.name}", ${req.phone});`);
        return result;  
    };
};

const del = async function(req) {
    let number = req;
    let getNum = await getNumber(number);
    if(getNum) {
        const result = await query(`delete from Car where Number = ${number}`);
        return result; 
    } else {
        return '查無此車號！';
    };
};

const update = async function(req) {
    let patternPhone = new RegExp('09[0-9]{8}');
    let patternDate = new RegExp('[0-9]{4}[0-9]{2}[0-9]{2}');
    let getNum = await getNumber(req.number);
    if(!getNum) {
        return '查無此車號！';
    } else if(req.updateItem == 'phone' && (!req.newData.match(patternPhone) || req.newData.length < 10)) {
        return '電話格式錯誤！';
    } else if(req.updateItem == 'date' && (!req.newData.match(patternDate) || req.newData.length < 8)) {
        return '日期格式錯誤！';
    } else {
        const result = await query(`update Car set ${req.updateItem} = "${req.newData}" where Number = ${req.number}`);
        return result;
    };
};

module.exports = {
    getAll,
    getSelect,
    insert,
    del,
    update
}