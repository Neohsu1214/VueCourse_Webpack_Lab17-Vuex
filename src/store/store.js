import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: function(state) {  // 也可以簡寫成 doubleCounter: (state) => { return state.counter * 2; }
            return state.counter * 2;
        }
    }
});