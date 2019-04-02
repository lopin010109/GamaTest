import axios from 'axios';
import * as types from './mutations_type';

export const actionGetAll = ({ commit }) => {
    console.log('actionGetAll');
    axios.get('/car/getall')
    .then((res) => {
        if(res.status === 200) {
            let resForStr = JSON.stringify(res.data);
            commit(types.GET_ALL, resForStr);
        }
    })
    .catch((err) => {
        commit(types.GET_ALL, err)
    });
};

export const actionGetSelect = ({ commit }, req) => {
    console.log('actionGetSelect', req);
    axios.post('/car/getselect', { number: req })
    .then((res) => {
        if(res.status === 200) {
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
    axios.post('/car/del', { number: req })
    .then((res) => {
        if(res.status === 200 && res.data === '查無此車號！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.DELETE, resForStr);
        } else if(res.status === 200) {
            axios.get('/car/getall')
            .then((res) => {
                if(res.status === 200) {
                    let resForStr = JSON.stringify(res.data);
                    commit(types.GET_ALL, resForStr);
                }
            })
            .catch((err) => {
                commit(types.GET_ALL, err)
            });
        }
    })
    .catch((err) => {
        commit(types.DELETE, err)
    });
};

export const actionCreate = ({ commit }, req) => {
    console.log('actionCreate 1', req);
    axios.post('/car/insert', { brand: req.Brand, number: req.Number,
    type: req.Type, date: req.Date, name: req.Name, phone: req.Phone})
    .then((res) => { 
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
        } else {
            axios.get('/car/getall')
            .then((res) => {
                if(res.status === 200) {
                    let resForStr = JSON.stringify(res.data);
                    commit(types.GET_ALL, resForStr);
                }
            })
            .catch((err) => {
                commit(types.GET_ALL, err)
            });
        }
    })
    .catch((err) => {
        commit(types.INSERT, err)
    });
};

export const actionUpdate = ({ commit }, req) => {
    console.log('actionUpdate 1', req);
    axios.post('/car/update', { updateItem: req.Value, newData: req.NewData,  number: req.Number})
    .then((res) => {
        console.log('actionUpdate 2',res)
        if(res.status === 200 && res.data === '查無此車號！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '電話格式錯誤！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else if(res.status === 200 && res.data === '日期格式錯誤！') {
            let resForStr = JSON.stringify(res.data);
            commit(types.UPDATE, resForStr);
        } else { 
            axios.get('/car/getall')
            .then((res) => {
                if(res.status === 200) {
                    let resForStr = JSON.stringify(res.data);
                    commit(types.GET_ALL, resForStr);
                }
            })
            .catch((err) => {
                commit(types.GET_ALL, err)
            });
        }
    })
    .catch((err) => {
        commit(types.UPDATE, err)
    });
  
};