export const getData = state => {
    console.log('getters', state.data);
    return state.data;
}