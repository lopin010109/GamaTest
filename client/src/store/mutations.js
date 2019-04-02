import * as types from './mutations_type';

export const state = {
    data: []
};

export const mutations = {
    [types.GET_ALL](state, data) {
        console.log('mutation-GetAll data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },
    [types.GET_SELECT](state, data) {
        console.log('mutation-GetSelect data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },
    [types.DELETE](state, data) {
        console.log('mutation-Delete data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },
    [types.INSERT](state, data) {
        console.log('mutation-Insert data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },
    [types.UPDATE](state, data) {
        console.log('mutation-Insert data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    }
};
