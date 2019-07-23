import { 
    getAll, 
    getSelect, 
    getDelete, 
    getInsert, 
    getUpdate } from '@/api/car';
import * as types from './mutation_type';

export const actionGetAll = ({ commit }) => {
    console.log('vuex 生命週期 - action 執行後端api取資料');
    getAll()
    .then((res) => {
        // status 200 表示 輸出正常
        if (res.status === 200) {
            let resForStr = JSON.stringify(res.data);
            console.log('vuex 生命週期 - 資料回傳後執行 commit 到 mutations', res.data);
            commit(types.GET_ALL, resForStr);
        }
    })
    .catch((err) => {
        commit(types.GET_ALL, err);
    });   
};

export const actionGetSelect = ({ commit }, req) => {
    console.log('actionGetSelect', req);
    getSelect({ number: req })
    .then((res) => {
        if(res.status === 200 && res.data === '查無此車號！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.GET_SELECT, resForStr);
        } else if(res.status === 200) {
            let resForStr = JSON.stringify(res.data);
            commit(types.GET_SELECT, resForStr);
        }
    })
    .catch((err) => {
        commit(types.GET_SELECT, err)
    });
};

export const actionDelete = ({ commit }, req) => {
    console.log('actionDelete', req);
    getDelete({ number: req })
    .then((res) => {
        if(res.status === 200 && res.data === '查無此車號！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.DELETE, resForStr);
        } else if(res.status === 200) {
           getAll()
            .then((res) => {
                if(res.status === 200) {
                    let resForStr = JSON.stringify(res.data);
                    commit(types.GET_ALL, resForStr);
                }
            })
            .catch((err) => {
                commit(type.GET_ALL, err)
            })
        };
    })
    .catch((err) => {
        commit(types.DELETE, err)
    });
};

export const actionCreate = ({ commit }, req) => {
    console.log('actionCreate 1', req);
    getInsert({ brand: req.Brand, number: req.Number,
    type: req.Type, date: req.Date, name: req.Name, phone: req.Phone})
    .then((res) => {
        console.log('actionCreate 2', res)
        if(res.status === 200 && res.data === '此車號已經存在！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.INSERT, resForStr);
        } else if(res.status === 200 && res.data === '填上缺少資料！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.INSERT, resForStr);
        } else if(res.status === 200 && res.data === '電話格式不符合！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.INSERT, resForStr);
        } else if(res.status === 200 && res.data === '日期格式不符合！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.INSERT, resForStr);
        } else if(res.status === 200 && res.data === '請輸入中文！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.INSERT, resForStr);
        } else if(res.status === 200 && res.data === '車號格式不對！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.INSERT, resForStr);
        } else {
            getAll()
            .then((res) => {
                if(res.status === 200) {
                    let resForStr = JSON.stringify(res.data);
                    commit(types.GET_ALL, resForStr);
                }
            })
            .catch((err) => {
                commit(types.GET_ALL, err);
            })
        }
    })
    .catch((err) => {
        commit(types.INSERT, err);
    });
};

export const actionUpdate = ({ commit }, req) => {
    console.log('actionUpdate 1', req);
    getUpdate({ updateItem: req.Value, newData: req.NewData, number: req.Number})
    .then((res) => {
        console.log('actionUpdate 2', res);
        if(res.status === 200 && res.data === '查無此車號！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '新車號已經擁有！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '電話格式不符合！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '日期格式不符合！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '請輸入中文！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '車號格式不對！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '未填入新資料！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else {
            getAll()
            .then((res) => {
                if(res.status === 200) {
                    let resForStr = JSON.stringify(res.data);
                    commit(types.GET_ALL, resForStr);
                }
            })
            .catch((err) => {
                commit(types.GET_ALL, resForStr);
            });
        }
    })
    .catch((res) => {
        commit(types.UPDATE, err);
    });
};