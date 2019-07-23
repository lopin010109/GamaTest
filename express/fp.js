const {query} = require('./mysql');
const _ = require('lodash');


const getAll = async function(req) {
    try {
        const result = await query('select * from Car');
        if(result.length >= 1) {
            return result;
        } else {
            return '查無資料！';
        };
    } catch(err) {
        console.log('getall fp error', err);
    };
};

const getNumber = async function(req) {
    try {
        let number = req;
        const result = await query(`select Number from Car where Number = "${number}"`);
        if(_.isEmpty(result)) {
            return false;
        } else {
            return true;
        };
    } catch(err) {
        console.log('getNumber fp error', err);
    };
};

const getSelect = async function(req) {
    try {
        let number = req;
        let getNum = await getNumber(number);
        if(getNum) {
            const result = await query(`select id, Brand, Number, Type, Date, Name, Phone from Car where Number = "${number}";`);
            return result;
        } else {
            return '查無此車號！';
        };
    } catch(err) {
        console.log('getSelect fp error', err);
    };   
};

const insert = async function(req) {
    try {
        console.log('req!!!!', req);
        let patternPhone = new RegExp('09[0-9]{8}');
        let patternDate = new RegExp('[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])');
        let patternType = new RegExp('[\u4e00-\u9fa5]');
        let patternNumber = new RegExp('[A-Z]{3}[0-9]{4}');
        let getNum = await getNumber(req.number);
        if(getNum) {
            return '此車號已經存在！';
        } else if(_.isEmpty(req.brand) || _.isEmpty(req.number) || _.isEmpty(req.type) 
        || _.isEmpty(req.date) || _.isEmpty(req.name) || _.isEmpty(req.phone)) {
            return '填上缺少資料！';   
        } else if(!patternPhone.test(req.phone) || req.phone.length > 10) {
            return '電話格式不符合！';
        } else if(!patternDate.test(req.date) || req.date.length > 8) {
            return '日期格式不符合！';
        } else if(!patternType.test(req.type)) {
            return '請輸入中文！';
        } else if(!patternNumber.test(req.number) || req.number.length > 7) {
            return '車號格式不對！'
        } else {
            const result = await query(`insert into Car (Brand, Number, Type, Date, Name, Phone) 
            values ("${req.brand}", "${req.number}", "${req.type}", ${req.date}, "${req.name}", "${req.phone}");`);
            return result;
        };
    } catch(err) {
        console.log('insert fp error', err);
    };
};

const del = async function(req) {
    try {
        let number = req;
        let getNum = await getNumber(number);
        if(getNum) {
            const result = await query(`delete from Car where Number = "${number}"`);
            return result; 
        } else {
            return '查無此車號！';
        };
    } catch(err) {
        console.log('del fp error', err);
    };
};

const update = async function(req) {
    try {
        let patternPhone = new RegExp('09[0-9]{8}');
        let patternDate = new RegExp('[0-9]{4}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])');
        let patternType = new RegExp('[\u4e00-\u9fa5]');
        let patternNumber = new RegExp('[A-Z]{3}[0-9]{4}');
        let getOldNum = await getNumber(req.number);
        let getNewNum = await getNumber(req.newData);
        if(!getOldNum) {
            return '查無此車號！';
        } else if(req.updateItem == 'number' && getNewNum) {
            return '新車號已經擁有！';
        } else if(req.updateItem == 'phone' && (!patternPhone.test(req.newData) || req.newData.length > 10)) {
            return '電話格式不符合！'; 
        } else if(req.updateItem == 'date' && (!patternDate.test(req.newData) || req.newData.length > 8)) {
            return '日期格式不符合！';
        } else if(req.updateItem == 'type' && !patternType.test(req.newData)) {
            return '請輸入中文！';
        } else if(req.updateItem == 'number' && (!patternNumber.test(req.newData) || req.newData.length > 7)) {
            return '車號格式不對！';    
        } else if(_.isEmpty(req.newData)) {
            return '未填入新資料！';
        } else {
            const result = await query(`update Car set ${req.updateItem} = "${req.newData}" where Number = "${req.number}"`);
            return result;
        };
    } catch(err) {
        console.log('update fp error', err);
    };  
};



module.exports = {
    getAll,
    getSelect,
    insert,
    del,
    update
}

