import * as types from './mutation_type'

export const state = {
    data: []
};

export const mutations = {
    [types.GET_ALL](state, data) {
        console.log('vuex 生命週期 - mutations 接收 actions 並改變 state ');
        
        let dataJson = JSON.parse(data);
        dataJson.forEach((item, index, array) => {
            // 把 data ISO 8601 格式轉換為 timeStamp (若為13碼不需要再乘1000)
            let timeStamp= Date.parse(`${item.Date}`);
            console.log('timeStamp', timeStamp);
            // 把 timeStamp 轉換為 GMT格式
            let newDate = new Date(timeStamp);
            console.log('newDate', newDate);
            // GMT格式並非 String 因此去轉換成後再放回原本物件裡面
            item.Date = `${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? '0'+(newDate.getMonth() + 1) : newDate.getMonth() + 1}-${newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate()}`;
        });
        console.log('dataJson', dataJson);
       
        state.data = dataJson;
    },
    [types.GET_SELECT](state, data) {
        console.log('mutationGetSelect data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },
    [types.DELETE](state, data) {
        console.log('mutationDelete data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },
    [types.INSERT](state, data) {
        console.log('mutationInsert data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },
    [types.UPDATE](state, data) {
        console.log('mutationUpdate data', data);

        let dataJson = JSON.parse(data);
        
        state.data = dataJson;
    },

};