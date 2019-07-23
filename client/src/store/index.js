import {state, mutations} from './mutations'
import * as getters from './getters'
import * as actions from './actions'
import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);

export default new Vuex.Store(
    {
        state,
        actions,
        getters,
        mutations,

        strict: true 
    }
);
