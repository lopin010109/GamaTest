export const getData = state => {
    console.log('vuex 生命週期 - getters 回傳改變的 state');
    return state.data;
}