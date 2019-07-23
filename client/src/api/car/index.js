import axios from 'axios';

export const getAll = request => axios.get('/car/getall', request);

export const getSelect = request => axios.post('/car/getSelect', request);

export const getDelete = request => axios.post('/car/del', request);

export const getInsert = request => axios.post('/car/insert', request);

export const getUpdate = request => axios.post('/car/update', request);